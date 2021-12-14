import { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { attemptCreateProduct } from "src/features/product/productActions";
import { useQuery } from "react-query";
import { createCategory, getCategories } from "src/utils/api";
import { withAdminRoute } from "src/hoc/withAdminRoute";
import { useForm } from "react-hook-form";
import FileUploader from "@components/Shared/FileUploader";
import CreatableSelect from 'react-select/creatable';

const customStyles = {
  control: (
    { borderColor, backgroundColor, boxShadow, ...provided },
    { theme }
  ) => ({
    ...provided,
    width: '100%',
    backgroundColor: 'rgba(243, 244, 246, 1)',
    borderColor: theme.colors.neutral0,
    '&:hover': {
      borderColor: theme.colors.neutral70,
    },
  }),
  valueContainer: style => ({
    ...style,
    padding: '6px 16px',
  }),
  placeholder: style => ({
    ...style,
    color: 'rgba(156, 163, 175, 1)',
    fontSize: '14px',
  }),
  input: style => ({
    ...style,
    outline: 'none',
    border: 'none',
  }),
};


function AddProduct() {

  

  const { data: categories, isLoading } = useQuery('categories', getCategories)

  const [category, setCategory] = useState();
  console.log(category)

  

  
    const{register,handleSubmit}=useForm()
  const [disabled, setDisabled] = useState(false);
  const [images, setPictures] = useState([]);
  const dispatch = useDispatch();



  // Handle Submit
  const onFormSubmit = data => {
    dispatch(attemptCreateProduct(data,{
      images,
      category
    }));
  };

  



  
  return (
    <>
      <Head>
        <title>GreenShop | Add Product</title>
      </Head>
      <div className="heightFixAdmin px-6 lg:py-20 sm:py-16 py-12">
        <div className="mx-auto max-w-screen-sm sm:text-base  text-sm ">
          <h2 className="lg:text-4xl sm:text-3xl text-2xl  font-bold mb-6">
            Add Product
          </h2>
          <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4">
            <input
              type="text"
              required
               id="title"
              name="title"
              placeholder="Title"
              className="bg-gray-100 py-2 px-4 rounded-md outline-none border border-gray-200"
              {...register('title', { required: true })}
              disabled={disabled}
            />
           <select
              required
              className="bg-gray-100 py-2 px-4 rounded-md outline-none border border-gray-200 capitalize"
              onChange={(e) => setCategory(e.target.value)}
              disabled={disabled}
            >
              {categories?.map((category) => (
                <option value={category?.name} key={`option-${category?._id}`}>
                  {category?.name}
                </option>
              ))}
            </select>
            <textarea
              required
              placeholder="Description"
              name="description"
              id="description"
              className="bg-gray-100 border border-gray-200 py-2 px-4 rounded-md resize-none h-24 outline-none"
              {...register('description', { required: true })}
              cols="25"
              rows="10"
              disabled={disabled}
            ></textarea>
            <input
              type="number"
              required
              name="price"
              id="price"
              placeholder="Price"
              className="bg-gray-100 border py-2 px-4 rounded-md outline-none border-gray-200"
               {...register('price', { required: true })}
              disabled={disabled}
            />
            <div className='lg:col-span-2'>
          <FileUploader
            title='Upload product image'
            folderName='products'
            {...{ setPictures }}
          />
        </div>
            <button
              type="submit"
              className={`button py-2 px-10 sm:text-base text-sm mt-4 ${disabled ? "opacity-50" : ""
                }`}
              disabled={disabled}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}


export default withAdminRoute(AddProduct)

import { useState } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { attemptCreateCategory } from "src/features/category/categoryAction";
import { withAdminRoute } from "src/hoc/withAdminRoute";
import { useForm } from "react-hook-form";


function AddCategory() {
  const [categoryName, setCategoryName] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  // Handle submit
  const onSubmit = async data => {
    try {
      dispatch(attemptCreateCategory(data));
    } catch (err) {
      console.error(err.message);
    }
  };

  

  const { handleSubmit, register } = useForm();

  

  return (
    <>
      <Head>
        <title>BlueShop | Add Category</title>
      </Head>
      <div className="heightFixAdmin px-6 lg:py-28 py-24">
        <div className="mx-auto max-w-screen-sm sm:text-base  text-sm">
          <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-6">
            Add Category
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 ">
            <input
              type="text"
              placeholder="Enter category name"
              className="bg-gray-100 py-2 border border-gray-200  px-4 rounded-md outline-none"
              {...register('name', { required: true })}
            />
            <button
              className={`button pt-2 px-10 sm:text-base text-sm ${disabled ? "opacity-50" : ""
                }`}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}


export default withAdminRoute(AddCategory)

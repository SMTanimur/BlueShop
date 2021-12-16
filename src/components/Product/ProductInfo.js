import Currency from "react-currency-formatter";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { attemptDeleteProduct } from "src/features/product/productActions";
import NormalToast from "src/utils";
import { removeImage } from "src/utils/api";

function ProductInfo({
  _id,
  title,
  price,
  description,
  category,
  image,
  border,
  removeFromSearchResults,
}) {

  console.log(image)

  const dispatch = useDispatch()
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);

  const handleProductDelete = (id, images) => {
    dispatch(attemptDeleteProduct(id));
    images.forEach(async image => {
      await removeImage(image.public_id);
      setDisabled(false)
      NormalToast("Product deleted");
    });
   
  };


  return (
    <div
      className={`flex sm:flex-row flex-col-reverse w-full my-4 text-sm text-gray-700 py-6 ${border ? "border-b border-gray-200" : ""
        } sm:justify-between gap-6`}
    >
      <div className="space-y-2">
        <div className="font-semibold text-base capitalize">{title}</div>
        <div className="text-blue-light capitalize">{category}</div>
        <p className="text-gray-500 lg:text-sm text-xs">{description}</p>
        <div>
          <p className="font-semibold">
            <span className="font-normal">Price - </span>
            <Currency quantity={price} currency="BDT" />
          </p>
        </div>
        <div className="flex items-center gap-4 pt-4">
          <button
            className={`button py-2 xxs:px-10 px-8 ${disabled ? "opacity-50" : ""
              }`}
            onClick={() => router.push(`/admin/products/update/${_id}`)}
            disabled={disabled}
          >
            Update
          </button>
          <button
            className={`button-red py-2 xxs:px-10 px-8 ${disabled ? "opacity-50" : ""
              }`}
            onClick={() =>handleProductDelete(_id,image)}
            disabled={disabled}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="sm:mx-0 sm:ml-6 min-w-max  mx-auto my-auto">
        <Image
          src={image[0]?.secure_url}
          width={120}
          height={120}
          alt=""
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
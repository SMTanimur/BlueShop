import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Search from "@components/Search";
import { signIn, useSession } from "next-auth/client";
import Link from 'next/link'
import DropDown from "@components/DropDown";

function Header() {
  const { user } = useSelector(state => state.auth);
  const router = useRouter();
  // const items = useSelector(selectItems);
  const [dropDown, setDropDown] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6 md:block hidden">
      <div className="flex items-center w-full max-w-screen-xl py-2 xl:space-x-16 lg:space-x-12  space-x-7  mx-auto">
        <div className="flex items-center">
          <Link href="/">
           <a className="link text-2xl font-semibold">GreenShop</a>
          </Link>
        </div>
        <div className="flex-grow">
          {/* <Search /> */}
        </div>
        <div className="flex items-center xl:space-x-12  lg:space-x-10 space-x-7  font-medium  lg:text-base text-sm">
          
              {!user &&(
                <span className="link">
                <Link href="/login">
                 <a > Login</a>
                </Link>
              </span>
              )}
              <span
                className="relative"
                onClick={() => setDropDown((value) => !value)}
              >
                <span className="flex items-center cursor-pointer">
                  <img
                    src= "/images/profile_pic.svg"
                    loading="lazy"
                    alt=""
                    width="24"
                    height="24"
                    className="object-contain w-10 h-10 rounded-full mr-1 hover:shadow-md"
                  />
                  <ChevronDownIcon className="lg:w-6 w-4" />
                </span>
                {dropDown && (
                  <div className="absolute top-14 right-1">
                    <DropDown hideDropDown={() => setDropDown(false)} />
                  </div>
                )}
              </span>
    
        
            <Skeleton circle={true} width={40} height={40} />
          <span className="link" onClick={() => router.push("/orders")}>
            Orders
          </span>
          <span className="link" onClick={() => router.push("/about")}>
            About
          </span>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => router.push("/cart")}
        >
          <ShoppingCartIcon className="xl:w-10 lg:w-9 w-8 link" />
          <div className="absolute -top-2 -right-1 rounded-full text-white bg-blue-light p-1 flex items-center justify-center text-xs font-extrabold">
            {/* {items?.length} */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
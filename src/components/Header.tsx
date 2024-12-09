import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex w-[1177px] justify-between  mt-6 mb-6 h-10 m-auto">
      <div className="flex gap-28">
        <h1 className="font-extrabold text-3xl">Hekto</h1>
        <ul className="flex items-center gap-9">
          <li className=" flex items-center text-pinkDefault">
            Home
            <Link href="/">
              <MdOutlineKeyboardArrowDown />
            </Link>
          </li>
          <li>
            <Link href="#">Pages</Link>
          </li>
          <li>
            {/* <Link href="/shop-grid">Products</Link> */}
            <Link href="/shop-grid">Products</Link>
          </li>
          <li>
            {/* <Link href="/shop-left-sidebar">Blog</Link> */}
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/shop-list">Shop</Link>
          </li>
          <li>
            <Link href="contact-us">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="bg-[#FB2E86] flex justify-center pr-2 w-[317px] items-center">
          <input type="text" className="py-2 border mr-2 w-full" width={11} />
          <CiSearch className="text-white text-3xl " />
        </div>
      </div>
    </div>
  );
};

export default Header;

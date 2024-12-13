import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className="flex max-w-[1170px] flex-wrap w-[95%]  items-center justify-between my-4  m-auto">
        <div className="flex items-center gap-20 md:max-lg:gap-7">
          <h1 className="font-extrabold text-3xl">Hekto</h1>
          <ul className="flex items-center gap-9 md:max-lg:gap-5">
            <li className="  text-pinkDefault">
              <Link href="/" className="flex items-center">
                Home
                <MdOutlineKeyboardArrowDown />
              </Link>
            </li>
            <li className="relative parent">
              Pages
              <ul className="absolute transform parent border z-10 bg-white w-[180px] flex flex-col items-start gap-2 m-2 px-3 py-2 rounded-md left-[-80px]">
                {[
                  { text: "Single Blog", link: "single-blog" },
                  { text: "Hackto Demo", link: "hackto-demo" },
                  { text: "Product Details", link: "product-details" },
                  { text: "Order Completed", link: "order-completed" },
                  { text: "Shopping Cart", link: "shopping-cart" },
                  { text: "Shop List", link: "shop-list" },
                  { text: "Shop Left Sidebar", link: "shop-left-sidebar" },
                  { text: "Grid Default", link: "grid-default" },
                  { text: "About us", link: "about-us" },
                  { text: "My account", link: "my-account" },
                  { text: "FAQ", link: "faq" },
                ].map((text: { text: string; link: string }, index) => (
                  <li key={index} className="list p-2">
                    <Link href={text.link}>{text.text}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
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
          <div className="bg-[#FB2E86] flex justify-center pr-2 max-w-[317px] items-center">
            <input
              type="text"
              className="p-2 border mr-2 w-full outline-none"
              width={11}
            />
            <CiSearch className="text-white text-3xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

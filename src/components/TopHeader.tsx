import Link from "next/link";
import React from "react";
import { FaRegEnvelope, FaRegHeart } from "react-icons/fa";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const TopHeader = () => {
  return (
    <div className="bg-[#7E33E0] hidden md:block">
      <div className="flex  items-center max-[1170px] w-[95%] m-auto font-semibold text-base  h-11  text-white">
        <div className="flex items-center justify-between  m-auto w-[1177px]">
          <div className="flex items-center   w-[60%]">
            <div className="flex items-center gap-3 mr-7 ">
              <FaRegEnvelope />
              <h3 className="text-base ">mhh.jawaid.ali@gmail.com</h3>
            </div>
            <div className="flex items-center gap-3">
              <FiPhoneCall /> <h3>(12345) 67890</h3>
            </div>
          </div>
          <ul className="flex items-center gap-3 justify-center">
            <li className="">
              <Link href="#" className="flex items-center gap-1 text-sm">
                English
                <MdOutlineKeyboardArrowDown />
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-1 text-sm">
                USD
                <MdOutlineKeyboardArrowDown />
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-1 text-sm">
                Login
                <FiUser className="text-base" />
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-1 mr-2 text-sm">
                Wishlist
                <FaRegHeart className="text-base" />
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                <PiShoppingCartSimpleLight className="text-2xl font-black" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

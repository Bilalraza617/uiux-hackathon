import Image from "next/image";
import React from "react";

const categories = [
  { image: "TC1_4" },
  { image: "L3" },
  { image: "T1" },
  { image: "TC1_4" },
];

const TopCategories = () => (
  <div className=" mx-auto pt-10  p-4">
    <h1 className="text-3xl font-bold mb-4 text-center">Top Categories</h1>
    <div className="flex flex-wrap  justify-center ">
      {categories.map((category, index) => (
        <div
          key={index}
          className="w-[269px] h-[345px] relative flex flex-col items-center justify-center  gap-5"
        >
          <div
            className="h-[200px] w-[200px] relative border border-[#F6F7FB] bg-[#F6F7FB] flex justify-center rounded-full items-center pt-5 "
            style={{ boxShadow: "0px 0px 20px 5px #F6F7FB" }}
          >
            <Image
              src={`/${category.image}.png`}
              alt="img"
              className=" object-cover mb-4 "
              width={150}
              height={150}
            />
          </div>
          <button className="bg-green-500 absolute bottom-[30%] left-[32%] text-white text-sm px-4 py-1 rounded shadow-md">
            View Shop
          </button>

          <div className="text-center">
            <h3 className="text-xlg font-semibold">Mini LCW Chair</h3>
            <p>$56.00</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>
);

export default TopCategories;

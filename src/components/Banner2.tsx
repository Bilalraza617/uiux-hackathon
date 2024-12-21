import React from "react";
import Component from "./Component";

const Banner2 = () => (
  <div className="mt-28 md:h-[462px]">
    <div className=" h-full flex flex-col justify-center items-center text-center bg-[url('/bg.png')] bg-cover bg-center">
      <h1 className="md:text-4xl font-bold mb-4">
        Get Latest Update By Subscribe
        <br /> Our Newsletter
      </h1>
      <button className="bg-[#FB2E86] text-white py-2 px-6 rounded-md">
        Shop Now
      </button>
    </div>
    <Component />
  </div>
);

export default Banner2;

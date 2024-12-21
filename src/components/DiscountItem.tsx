import Image from "next/image";
import React from "react";

const DiscountItem = () => (
  <div className="  mt-10 md:mt-24">
    <div className="   p-4">
      <h1 className="text-2xl md:text-4xl leading-10  text-center font-extrabold mb-3">
        Discount Item
      </h1>
      <div className="flex justify-center text-sm ">
        <button className="px-2 md:px-4 md:py-2   underline text-[#FB2E86] rounded">
          Wood Chair
        </button>
        <button className="px-2 md:px-4  ">Plastic Chair</button>
        <button className="px-2 md:px-4  ">Sofa Colletion</button>
      </div>
    </div>
    <div className=" flex   md:w-[95%] m-auto items-center justify-center">
      <div className="flex  flex-col gap-y-2  md:gap-4 items-center  md:items-start">
        <h2 className="text-center md:text-3xl font-extrabold">
          20% Discount Of All Products
        </h2>
        <h3 className="text-xl text-[#FB2E86] font-medium mb-2">
          Eams Sofa Compact
        </h3>
        <p className="text-[#B7BACB] p-5 md:p-0 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          <br className="hidden md:block" />
          feugiat habitasse nec, bibendum condimentum.
        </p>
        <ul className="text-center  md:w-[500px] md:ml-0 sm:ml-10 md:p-0 md:gap-x-8 md:gap-y-3 flex-wrap flex items-center justify-center text-[#B7BACB]">
          {[
            { text: "Material expose like metals" },
            { text: "Clear lines and geomatric figures" },
            { text: "Simple neutral colours." },
            { text: "Material expose like metals" },
          ].map((item, index) => (
            <div key={index} className="flex mt-2  items-center  gap-2">
              <Image
                src={`/DA.png`}
                alt="img"
                width={16}
                height={11}
                className={index === 3 ? "ml-8" : ""}
              />
              <li className="text-sm">{item.text}</li>
            </div>
          ))}
        </ul>
        <button className="bg-[#FB2E86] text-white py-2 px-6 rounded ">
          Shop Now
        </button>
      </div>
      <div className="w-[40%] hidden md:block">
        <Image
          src="/chair1.png"
          alt="Eams Sofa Compact"
          className=" object-cover"
          width={600}
          height={597}
        />
      </div>
    </div>
  </div>
);

export default DiscountItem;

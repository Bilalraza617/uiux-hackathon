import Image from "next/image";
import React from "react";

const DiscountItem = () => (
  <div className="w-[90%] m-auto   mt-24">
    <div className="   p-4">
      <h1 className="text-4xl leading-10  text-center font-extrabold mb-3">
        Discount Item
      </h1>
      <div className="flex justify-center ">
        <button className="px-4 py-2 underline text-[#FB2E86] rounded">
          Wood Chair
        </button>
        <button className="px-4  ">Plastic Chair</button>
        <button className="px-4  ">Sofa Colletion</button>
      </div>
    </div>
    <div className=" flex items-center">
      <div className="flex flex-col  gap-4 items-start">
        <h2 className="text-3xl font-extrabold">
          20% Discount Of All Products
        </h2>
        <h3 className="text-xl text-[#FB2E86] font-medium mb-2">
          Eams Sofa Compact
        </h3>
        <p className="text-[#B7BACB] mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          <br />
          feugiat habitasse nec, bibendum condimentum.
        </p>
        <ul className=" w-[500px] gap-x-8 gap-y-3 flex-wrap flex text-[#B7BACB]">
          {[
            { text: "Material expose like metals" },
            { text: "Clear lines and geomatric figures" },
            { text: "Simple neutral colours." },
            { text: "Material expose like metals" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
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
        <button className="bg-[#FB2E86] text-white py-2 px-4 rounded ">
          Shop Now
        </button>
      </div>
      <div>
        <Image
          src="/chair1.png"
          alt="Eams Sofa Compact"
          className=" object-cover"
          width={699}
          height={597}
        />
      </div>
    </div>
  </div>
);

export default DiscountItem;

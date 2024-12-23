import Image from "next/image";
import React from "react";

const item = [
  { image: "L1" },
  { image: "L2" },
  { image: "L3" },
  { image: "L4" },
  { image: "L5" },
  { image: "L6" },
];

const LatestProducts = () => (
  <div>
    <div className=" mx-auto md:p-4">
      <h1 className="text-2xl md:text-4xl leading-10 text-[#151875] text-center font-extrabold mb-3">
        Leatest Products
      </h1>
      <div className="flex justify-center text-xs md:text-xl  mb-4">
        <button className="px-4 py-2 underline text-[#FB2E86]">
          New Arrival
        </button>
        <button className="px-4 py-2 text-[#151875]  ">Best Seller</button>
        <button className="px-4 py-2 text-[#151875] ">Featured</button>
        <button className="px-4 py-2 text-[#151875] ">Special Offer</button>
      </div>
    </div>

    <div className="p-4 flex flex-wrap gap-5 justify-center m-auto max-w-[1300px]">
      {item.map((data: { image: string }, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="h-[306px] w-[380px] flex items-center flex-col bg-[#F7F7F7] ">
            <div className="   my-5">
              <div className="relative flex items-center ">
                <div className="w-[223px] h-[229px]">
                  <Image
                    src={`/${data.image}.png`}
                    alt="img"
                    className=" h-full "
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white pr-4">
            <h3>Comfort Handy Craft</h3>
            <div className="flex items-center gap-2">
              <span className="text-red-500">$$42.00</span>
              <span className="line-through text-gray-500">$$65.00</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LatestProducts;

import Image from "next/image";
import React from "react";

const Baner = () => {
  return (
    <div className="bg-[#F1F0FF] flex flex-wrap items-center justify-center">
      <div className="">
        <Image
          src="/sofa2.png"
          alt="Sofa"
          width={558}
          height={550}
          className=" object-cover "
        />
      </div>
      <div className=" px-2 md:w-[40%]">
        <h2 className="md:text-4xl font-bold mb-4">
          Unique Features Of Latest & Trending Products
        </h2>
        <ul className="list-none ">
          {[
            {
              text: "All frames constructed with hardwood solids and laminates",
              color: "#F52B70",
            },
            {
              text: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
              color: "#2B2BF5",
            },
            {
              text: "Arms, backs and seats are structurally reinforced",
              color: "#2BF5CC",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex text-[#ACABC3] mb-4 items-center gap-3"
            >
              <div className="">
                <div
                  className="w-3 h-3 rounded-full "
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
              <li>{item.text}</li>
            </div>
          ))}
        </ul>
        <div className="flex gap-5 justify-center md:justify-start  items-center mt-6">
          <button className=" bg-[#FB2E86] text-white py-1 md:py-3 px-5 md:px-8 rounded ">
            Add To Cart
          </button>
          <p className="text-xs md:text-lg md:font-semibold ">
            <strong>B&B Italian Sofa </strong>
            <br className="hidden md:block" />
            $32.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Baner;

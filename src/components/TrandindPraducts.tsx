import Image from "next/image";
import React from "react";

const trendingProducts = [
  { image: "T1" },
  { image: "T2" },
  { image: "T3" },
  { image: "T4" },
];

const executiveSeats = [
  {
    image: "TPB1",
    bg: "#FFF6FB",
    width: 213,
    hieght: 207,
    text: "Shop Now",
  },
  {
    image: "TPB2",
    bg: "#EEEFFB",
    width: 312,
    hieght: 173,
    text: "View Collection",
  },
];

const nastedMap = [
  {
    image: "TPR1",
  },
  {
    image: "TPR2",
  },
  {
    image: "TPR3",
  },
];

const Trandingproducts = () => (
  <div className="mt-24">
    <div>
      <div>
        <h1 className="text-4xl leading-10 text-[#151875] text-center font-extrabold mb-3">
          Trending Products
        </h1>
      </div>

      <div className=" flex flex-wrap md: gap-5 mt-10 justify-center">
        {trendingProducts.map((data: { image: string }, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 md:w-[270px] h-[350px] shadow-lg rounded-lg p-2   items-center"
          >
            <div className=" flex items-center  h-[244px] flex-col bg-[#F7F7F7] rounded">
              <Image
                src={`/${data.image}.png`}
                alt="img"
                className="object-cover h-full p-10"
                width={223}
                height={244}
              />
            </div>
            <div>
              <div className="flex flex-col justify-center m-3">
                <h3 className="text-lg font-bold">Cantilever chair</h3>
                <div className="flex justify-evenly items-center text-[14px] ">
                  <span className="text-[14px]">$$26.00 </span>
                  <span className="line-through text-[#1518754D]">$$42.00</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-7 justify-center mt-10">
        <div className="flex  flex-wrap gap-7">
          {executiveSeats.map((seat, index) => (
            <div
              key={index}
              className="p-5  rounded w-full md:max-w-[420px] shadow-lg"
              style={{ backgroundColor: seat.bg }}
            >
              <h3 className="text-lg font-medium">23% off in all products</h3>
              <h4 className="mt-2 text-[#FB2E86] underline">{seat.text}</h4>
              <div className="flex justify-end items-end h-full pb-10">
                <Image
                  src={`/${seat.image}.png`}
                  alt="img"
                  className=" h-48 object-cover mb-4"
                  width={seat.width}
                  height={seat.hieght}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="">
          {nastedMap.map((text, index) => (
            <div key={index} className="h-[115px] gap-3  flex items-center">
              <div className="bg-[#F5F6F8] max-w-[100px] h-[100px] flex items-center justify-center ">
                <Image
                  src={`/${text.image}.png`}
                  alt="img"
                  className="object-cover "
                  width={67}
                  height={67}
                />
              </div>
              <div className="text-lg font-bold">
                <h3>Executive Seat chair</h3>
                <span className="line-through">$$32.00</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Trandingproducts;

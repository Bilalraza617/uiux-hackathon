import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShopHero from "@/components/ShopHero";
import Brands from "@/components/Brands";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaSearchPlus, FaStar } from "react-icons/fa";

const ShopList = () => {
  const productList = [
    {
      link: "#",
      image: "/SL1.png",
      name: "Accumsan tincidunt",
      variant: ["#DE9034", "#E60584", "#5E37FF"],
      price: 25.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      cutPrice: 45.0,
    },
    {
      link: "#",
      image: "/SL2.png",
      name: "In nulla",
      variant: ["#fbb034", "#02b3e4", "#5E37FF"],
      price: 30.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      cutPrice: 50.0,
    },
    {
      link: "#",
      image: "/SL3.png",
      name: "Lorem ipsum dolor",
      variant: ["#ec407a", "#8e24aa", "#03a9f4"],
      price: 20.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      cutPrice: 40.0,
    },
    {
      link: "#",
      image: "/SL4.png",
      name: "Sit amet consectetur",
      variant: ["#4caf50", "#ff9800", "#607d8b"],
      price: 35.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      cutPrice: 55.0,
    },
    {
      link: "#",
      image: "/SL5.png",
      name: "Sed do eiusmod",
      variant: ["#ff5722", "#00bcd4", "#795548"],
      price: 40.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      cutPrice: 60.0,
    },
    {
      link: "#",
      image: "/SL6.png",
      name: "Sed do eiusmod",
      variant: ["#ff5722", "#00bcd4", "#795548"],
      price: 40.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      cutPrice: 60.0,
    },
    {
      link: "#",
      image: "/SL7.png",
      name: "Sed do eiusmod",
      variant: ["#ff5722", "#00bcd4", "#795548"],
      price: 40.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      cutPrice: 60.0,
    },
  ];
  return (
    <>
      <ShopHero title="Shop List" />
      <div className="w-[95%] m-auto max-w-[1141px]">
        <div className="bg-white flex items-center justify-between   m-auto mt-40">
          <div>
            <h2 className="text-xl text-custumBlue font-bold">
              Ecommerce Acceories & Fashion Items
            </h2>
            <p className="text-sm text-gray-400">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div>
              <span>Per Page:</span>
              <input type="text" className="border ml-2" />
            </div>
            <div>
              <span>Sort By:</span>
              <select name="sort" id="sort" className="text-gray-400">
                <option value="BestMatch">Best Match</option>
              </select>
            </div>
            <div>
              <span>View:</span> <input type="text" className="border" />
            </div>
          </div>
        </div>

        <div className=" mt-40">
          {productList.map((item, index) => (
            <div key={index} className="hover:bg-[#F6F6FD80]">
              <Link
                href={item.link}
                passHref
                className="bg-gray-00 flex items-center gap-5 h-70 my-16 "
              >
                <Image
                  src={item.image}
                  alt={"Product"}
                  width={313.63}
                  height={217.56}
                  className=" object-cover  "
                />
                <div className="flex flex-col  gap-2 text-custumBlue">
                  <div className="flex justify-between items-center max-w-xs">
                    <h2 className=" text-xl  font-extrabold">{item.name}</h2>
                    <div className="flex gap-2">
                      {/* {item.variant.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          style={{ backgroundColor: color }}
                          className="h-3 w-3 rounded-full"
                        ></div>
                      ))} */}
                      <span className="h-3 w-3 rounded-full bg-[#5E37FF]"></span>
                      <span className="h-3 w-3 rounded-full bg-[#E60584]"></span>
                      <span className="h-3 w-3 rounded-full bg-[#DE9034]"></span>
                    </div>
                  </div>
                  {/* <div className="h-full flex flex-col justify-between gap-4 items-start"> */}
                  <div className="text-custumBlue flex gap-2">
                    <h6> ${item.price.toFixed(2)}</h6>
                    <h6 className="line-through text-[#FB2E86]">
                      {/* ${item.cutPrice.toFixed(2)} */}
                      $52.00
                    </h6>
                    <div className="flex gap-2 ml-3">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar />
                    </div>
                  </div>
                  <p className="text-gray-400 w-[70%]">{item.description}</p>
                  <div className="flex gap-5">{/* <IconZoomCancel /> */}</div>
                  {/* </div> */}
                  <div className="flex gap-8 ">
                    <FiShoppingCart className="bg-" />
                    <FaRegHeart className="bg-" />
                    <FaSearchPlus className="bg-" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Brands />
      </div>
    </>
  );
};

export default ShopList;

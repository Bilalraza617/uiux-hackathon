import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShopHero from "@/components/ShopHero";
import Brands from "@/components/Brands";
import FilterSidebar from "@/components/FilterAside";

const ShopLeftSidebar = () => {
  const productList = [
    {
      link: "#",
      image: "/SLS1.png",
      name: "Vel elit euismod",
      variant: ["#4e4e4e", "#fb2e86", "#f8fb2e"],
      price: 25.0,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
      cutPrice: 45.0,
    },
    {
      link: "#",
      image: "/SLS2.png",
      name: "Consectetur adipiscing",
      variant: ["#fbb034", "#02b3e4", "#f8fb2e"],
      price: 30.0,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
      cutPrice: 50.0,
    },
    {
      link: "#",
      image: "/SLS3.png",
      name: "Lorem ipsum dolor",
      variant: ["#ec407a", "#8e24aa", "#03a9f4"],
      price: 20.0,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
      cutPrice: 40.0,
    },
    {
      link: "#",
      image: "/SLS4.png",
      name: "Sit amet consectetur",
      variant: ["#4caf50", "#ff9800", "#607d8b"],
      price: 35.0,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
      cutPrice: 55.0,
    },
    {
      link: "#",
      image: "/SLS5.png",
      name: "Sed do eiusmod",
      variant: ["#ff5722", "#00bcd4", "#795548"],
      price: 40.0,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
      cutPrice: 60.0,
    },

    {
      link: "#",
      image: "/SLS7.png",
      name: "Sed do eiusmod",
      variant: ["#ff5722", "#00bcd4", "#795548"],
      price: 40.0,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
      cutPrice: 60.0,
    },
    {
      link: "#",
      image: "/SLS8.png",
      name: "Sed do eiusmod",
      variant: ["#ff5722", "#00bcd4", "#795548"],
      price: 40.0,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
      cutPrice: 60.0,
    },
  ];
  return (
    <>
      <ShopHero title="Shop left Sidebar" />

      <div className="w-[95%] m-auto text-[#151875]">
        <div className="bg-white flex items-center justify-between  m-auto mt-20">
          <div>
            <h2 className="text-xl  font-bold">
              Ecommerce Acceories & Fashion Items
            </h2>
            <p className="text-sm text-gray-400">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div>
              <span>Per Page:</span>
              <input type="text" className="border-2 ml-2" />
            </div>
            <div>
              <span>Sort By:</span>
              <select
                name="sort"
                id="sort"
                className="text-[#8A8FB9] border-2 p-1 m-2"
              >
                <option value="BestMatch">Best Match</option>
              </select>
            </div>
            <div>
              <span>View:</span>
              <input type="text" className="border-2 ml-2" />
            </div>
          </div>
        </div>

        <div className="flex bg-white  m-auto mt-10">
          <FilterSidebar />
          <div>
            {productList.map((item, index) => (
              <Link
                href={item.link}
                passHref
                key={index}
                className="bg-gray-00 flex items-center gap-5 h-70 p-5 my-5 shadow-sm "
              >
                <Image
                  src={item.image}
                  alt={"Product"}
                  width={500}
                  height={500}
                  className="h-60 object-cover bg-gray-100 p-8"
                />
                <div className="flex flex-col gap-2 pt-3">
                  <div className="flex justify-between items-center max-w-xs">
                    <h2 className=" text-xl  font-extrabold">{item.name}</h2>
                    <div className="flex gap-2">
                      {item.variant.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          style={{ backgroundColor: color }}
                          className="h-3 w-3 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-custumBlue">
                    ${item.price.toFixed(2)}{" "}
                    <span className="line-through text-[#FB2E86]">
                      ${item.cutPrice.toFixed(2)}
                    </span>
                  </p>
                  <p className="text-gray-400">{item.description}</p>
                  <div className="flex gap-5">{/* <IconZoomCancel /> */}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Brands />
    </>
  );
};

export default ShopLeftSidebar;

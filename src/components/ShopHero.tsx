import React from "react";
import Breadcrumbs from "./BreadCrumb";

interface Shop {
  title: string;
}
const ShopHero = ({ title }: Shop) => {
  return (
    <div className="bg-[#F6F5FF] h-[286px] sm:max-lg:h-[150px] flex items-center justify-center">
      <div className=" max-w-[1141px]  w-[90%] m-auto ">
        <h1 className="text-4xl font-extrabold text-[#101750]">{title}</h1>
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default ShopHero;

import React from "react";
import Breadcrumbs from "./BreadCrumb";

interface Shop {
  title: string;
}
const ShopHero = ({ title }: Shop) => {
  return (
    <div className="bg-[#F6F5FF] h-[286px] sm:max-2xl:h-[150px] flex items-center ">
      <div className=" max-w-[1141px]  w-[95%] m-auto ">
        <h1 className="text-4xl font-extrabold text-[#101750]">{title}</h1>
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default ShopHero;

import React from "react";
import Link from "next/link";
import ShopHero from "@/components/ShopHero";
import Image from "next/image";
import Brands from "@/components/Brands";

const OrderConfirmation = () => (
  <>
    <ShopHero title="Order Completed" />
    <div className=" flex items-center justify-center mt-40 w-[90%] h-[38vh] m-auto relative border">
      <div className="absolute top-[-30px] left-[-40px]">
        <Image src="/clock.png" alt="img" width={94} height={94} />
      </div>
      <div className="flex items-center gap-2 flex-col  ">
        <div className="flex justify-center mb-4"></div>
        <Image src="/Oarrow.png" alt="img" width={46.08} height={36.91} />
        <h1 className="text-3xl font-bold mb-2 text-[#101750]">
          Your Order Is Completed!
        </h1>
        <p className="text-[#8D92A7] text-sm font-semibold max-w-[625px] w-full text-center">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 <br /> hours. You will receive an email
          confirmation when your order is completed.
        </p>
        <div className="flex justify-center mb-4"></div>
        <Link href="/" className="bg-[#FF1788] text-white py-2 px-4 rounded-sm">
          Continue Shopping
        </Link>
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] translate">
        <Image src="/page.png" alt="img" width={60.42} height={70} />
      </div>
    </div>
    <Brands />
  </>
);

export default OrderConfirmation;

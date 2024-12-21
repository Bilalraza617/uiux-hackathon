import React from "react";
import Image from "next/image";
import ShopHero from "@/components/ShopHero";

const Checkout = () => (
  <>
    <ShopHero title="Hekto Demo" />
    <div className=" mx-auto   max-w-[1177px] w-[96%] text-[#1D3178] mt-20">
      <h1 className="text-3xl font-bold mb-4">Hekto Demo</h1>
      <p>Cart/ Information/ Shipping/ Payment</p>
      <div className="flex gap-8 items-center mt-5">
        <div className="max-w-[770px] bg-[#F8F8FD] p-5 pt-20 w-[70%]">
          <div className="flex justify-between items-center ">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className=" mb-4 text-xs text-[#C1C8E1]">
              Already have an account? Log in
            </p>
          </div>
          <form className=" ">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email or mobile phone number"
                className="w-full p-2 border-b-2 bg-transparent border-gray-[#BFC6E0] rounded mt-1 focus:outline-none"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="newsletter" className="mr-2" />
              <label htmlFor="newsletter" className="text-gray-700">
                Keep me up to date on news and exclusive offers
              </label>
            </div>

            <h2 className="text-2xl font-semibold mb-4 mt-20">
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  id="first-name"
                  placeholder="First name (optional)"
                  className="w-full p-2 border-b-2 bg-transparent border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Last name"
                  className="w-full p-2 border-b-2 bg-transparent border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="w-full p-2 border-b-2 bg-transparent border-gray-300 rounded mt-1 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="apartment"
                placeholder="Appaetnentment,suit,e.t.c (optinal)"
                className="w-full p-2 border-b-2 bg-transparent border-gray-300 rounded mt-1 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1  gap-4 mb-4">
              <div>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="w-full p-2 border-b-2 bg-transparent border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
              <div className="flex justify-center gap-8 items-center">
                <div>
                  <input
                    type="text"
                    id="city"
                    placeholder="Bangladesh"
                    className="w-[350px] p-2  border-b-2 bg-transparent border-gray-300 rounded mt-1 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="postal-code"
                    placeholder="Postal Code"
                    className="w-[350px] p-2 border-b-2 bg-transparent border-gray-300 rounded mt-1 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <button className="bg-[#FB2E86] text-white py-2 px-4 mt-20 mb-10 rounded hover:bg-gray-400">
              Continue Shopping
            </button>
          </form>
        </div>

        <div className=" w-[30%]">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          <ul className="mb-4">
            {["HD1", "HD2", "HD3", "HD4", "HD5"].map((img, index) => (
              <li key={index} className="flex p-4 border-b">
                <Image src={`/${img}.png`} alt="img" width={83} height={87} />
                <div className="p-2">
                  <h4 className="text-black">Ut diam consequat</h4>
                  <div className="flex text-sm">
                    <p className="text-[#A1A8C1]">Color:Brown</p>
                    <p className="ml-24">$32.00</p>
                  </div>
                  <p className="text-[#A1A8C1] text-sm">Size:XL</p>
                </div>
              </li>
            ))}
          </ul>
          <div className=" bg-[#F4F4FC] mt-10 p-5 ">
            <div className="flex justify-between mb-2  border-b-2 p-2">
              <span className="">Subtotal</span>
              <span className="">$219.00</span>
            </div>
            <div className="flex justify-between mb-4  border-b-2 p-2">
              <span className="">Total</span>
              <span className="">$235.00</span>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="" className="text-[#8A91AB] text-xs ml-2">
                Shipping & taxes calculated at checkout
              </label>
            </div>
            <button className="bg-[#19D16F] mt-5 text-white py-2 px-4 rounded-md hover:bg-pink-700">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Checkout;

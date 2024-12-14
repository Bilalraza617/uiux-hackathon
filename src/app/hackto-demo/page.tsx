import React from "react";
import Image from "next/image";
import ShopHero from "@/components/ShopHero";

const Checkout = () => (
  <>
    <ShopHero title="Hekto Demo" />
    <div className=" mx-auto  max-w-[1177px] w-[96%] text-[#1D3178] mt-20">
      <h1 className="text-3xl font-bold mb-4">Hekto Demo</h1>
      <p>Cart/ Information/ Shipping/ Payment</p>
      <div className="flex items-center justify-between">
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email or mobile phone number"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="newsletter" className="mr-2" />
              <label htmlFor="newsletter" className="text-gray-700">
                Keep me up to date on news and exclusive offers
              </label>
            </div>
            <p className="text-[#8A91AB]  mb-4">
              Already have an account? Log in
            </p>

            <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  id="first-name"
                  placeholder="First name (optional)"
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Last name"
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="apartment"
                placeholder="Appaetnentment,suit,e.t.c (optinal)"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="city"
                  placeholder="Bangladesh"
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="postal-code"
                  placeholder="Postal Code"
                  className="w-full p-2 border  rounded mt-1 focus:outline-none"
                />
              </div>
            </div>
            <button className="bg-[#FB2E86] text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
              Continue Shopping
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          <ul className="mb-4">
            <li className="flex justify-between mb-2">
              <Image
                src="/product1.png"
                alt="Product 1"
                className="w-16 h-16 object-cover"
                width={500}
                height={500}
              />
              <span className="text-gray-700">Comfort Handy Craft</span>
              <span className="text-gray-700">$120.00</span>
            </li>
          </ul>
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-700">$219.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">Total</span>
              <span className="text-gray-700">$235.00</span>
            </div>
            <p className="text-gray-500 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Checkout;

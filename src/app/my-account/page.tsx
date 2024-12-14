import Brands from "@/components/Brands";
import ShopHero from "@/components/ShopHero";
import Link from "next/link";
import React from "react";

const Login = () => (
  <>
    <ShopHero title="My Account" />
    <div className="flex justify-center items-center  ">
      <div className=" shadow-md  flex flex-col text-center ">
        <nav className="text-sm text-gray-600 mb-4">
          <Link href="#" className="">
            Login
          </Link>
          &gt;
          <Link href="#" className="e">
            Pages
          </Link>
          &gt; My Account
        </nav>
        <h2 className="text-2xl font-black mb-2">Login</h2>
        <p className="mb-4 text-[#9096B2] tracking-tighter">
          Please login using account detail bellow.
        </p>
        <form>
          <div className="mb-4 ">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full p-2 border border-[#C2C5E1] rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="Email Address"
              className="w-full p-2 border border-[#C2C5E1] rounded mt-1 focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <Link href="#" className="text-[#C2C5E1] hover:underline">
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FB2E86] text-white py-2 px-4 rounded-md hover:bg-pink-700"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-[#9096B2]">
          Dont have an Account?
          <Link href="#" className="text-[#9096B2] ">
            Create account
          </Link>
        </p>
      </div>
    </div>
    <Brands />
  </>
);

export default Login;

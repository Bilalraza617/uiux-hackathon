import Brands from "@/components/Brands";
import ShopHero from "@/components/ShopHero";
import React from "react";

const Faq = () => (
  <>
    <ShopHero title="FAQ" />
    <div className=" mx-auto pt-20 w-[95%] text-[#1D3178]">
      <div className=" flex  ">
        {/* General Information Section */}
        <div className=" w-[50%]">
          <h1 className="text-3xl font-bold mb-10">General Information</h1>
          <div className="">
            <div className="mb-10">
              <h2 className="text-xl font-extrabold mb-5">
                Es dolorem eum ex sed enimend consectetur?
              </h2>
              <p className="text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique sed <br /> tristique nulla vitae, consequat gravida
                sagittis.
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-xl font-extrabold mb-5">
                Magna tincidunt est fermentum eros.
              </h2>
              <p className="text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique sed <br />
                tristique nulla vitae, consequat gravida sagittis.
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-xl font-extrabold mb-5">
                Odio malesuada hac erat consequat sollicit?
              </h2>
              <p className="text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique sed <br />
                tristique nulla vitae, consequat gravida sagittis.
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-xl font-extrabold mb-5">
                Eti id blandit aenean hac id velit quis nunc?
              </h2>
              <p className="text-[#A1ABCC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique sed <br />
                tristique nulla vitae, consequat gravida sagittis.
              </p>
            </div>
          </div>
        </div>

        {/* Ask a Question Section */}
        <div className="w-[50%] bg-[#F8F8FD]   px-5 py-14">
          <h1 className="text-3xl font-bold  mb-20">Ask a Question</h1>
          <form>
            <input
              type="text"
              id="name"
              placeholder="Your Name*"
              className="w-full p-2 border border-gray-300 rounded mb-10 focus:outline-none"
            />
            <input
              type="text"
              id="subject"
              placeholder="Subject*"
              className="w-full p-2 border border-gray-300 rounded mb-10 focus:outline-none"
            />

            <textarea
              placeholder="Type Your Message*"
              id="message"
              className="w-full p-2 border border-gray-300 rounded mb-10 focus:outline-none"
              rows={7}
            ></textarea>

            <button
              type="submit"
              className=" bg-[#FB2E86] text-white py-2 px-8 rounded-md "
            >
              Send Mail
            </button>
          </form>
          <div></div>
        </div>
      </div>
    </div>
    <Brands />
  </>
);

export default Faq;

import ShopHero from "@/components/ShopHero";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <ShopHero title="Contact Us" />
      <div className="container w-[1170px] mx-auto p-4">
        {/* Information About Us Section */}
        <div className="flex m-auto justify-between">
          <div className="w-[50%]">
            <h1 className="text-3xl font-bold mb-4">Information About us</h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor ultricies mauris placerat, dignissim dui eleifend. Sed ac
              malesuada magna. In nec magna eget dolor lobortis. Aenean non
              rhoncus lacus, blandit quis. Nullam et ipsum.
            </p>
            <div className="flex mt-4 space-x-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Contact Way Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Way</h2>
            <ul className="list-none space-y-2">
              <li>
                <strong>Tel:</strong> 877-67-88-99
              </li>
              <li>
                <strong>Email:</strong> info@example.com
              </li>
              <li>
                <strong>Address:</strong> 123 Main Street, Anytown, USA
              </li>
              <li>
                <strong>Support:</strong> Available 24/7
              </li>
              <li>
                <strong>Shipping:</strong> Free worldwide shipping
              </li>
            </ul>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="flex justify-between items-center">
          <div className="w-[50%] ">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
            <form>
              <div className="mb-4 gap-5 flex">
                <input
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Type Your Message"
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className=" bg-[#FB2E86] text-white py-2 px-6 rounded-md "
              >
                Send Mail
              </button>
            </form>
          </div>
          <div>
            <Image src="/contactus.png" alt="img" width={500} height={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

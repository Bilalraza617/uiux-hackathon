import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogPosts = [
  { image: "LB1", author: "SaberAli" },
  { image: "LB2", author: "Surfauxion" },
  { image: "LB3", author: "SaberAli" },
];

const LatestBlog = () => (
  <div className="md:mt-32">
    <div className=" py-12">
      <h2 className="text-3xl font-extrabold text-center ">Leatest Blog</h2>
    </div>

    <div className="flex flex-wrap p-10 gap-10 md:gap-2 xl:gap-12 justify-center items-center">
      {blogPosts.map((data: { image: string; author: string }, index) => (
        <div
          key={index}
          className="max-w-[370px] md:w-[300px] lg:h-[430px] md:h-[410px] shadow-lg rounded-lg overflow-hidden"
        >
          <div>
            <Image
              src={`/${data.image}.png`}
              alt="img"
              width={370}
              height={255}
              className=" object-cover"
            />
          </div>
          <div className="p-4 font-semibold">
            <div className="flex gap-6">
              <div className="flex gap-1  items-center">
                <Image src="/pen.png" alt="img" width={12} height={12} />
                <p>{data.author}</p>
              </div>
              <div className="flex gap-1 items-center">
                <Image src="/calender.png" alt="img" width={10} height={10} />
                <span>21 August,2020</span>
              </div>
            </div>
            <h3 className="mt-2 text-lg font-semibold">
              <span className={index === 1 ? "text-[#FB2E86]" : ""}>
                Top esssential Trends in 2021
              </span>
            </h3>
            <p className="mt-2 text-gray-600">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link href="#" className="mt-2 inline-block underline">
              <span className={index === 1 ? "text-[#FB2E86] underline " : ""}>
                Read More
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LatestBlog;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShopHero from "@/components/ShopHero";
// import { FaFacebook, FaPenNib, FaTwitter } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Brands from "@/components/Brands";
import { FaPenNib } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";

// const blog = [
//   {
//     image: "b1",
//     title: "Mauris at orci non vulputate diam tincidunt nec.",
//   },
//   {
//     image: "b2",
//     title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
//   },
//   {
//     image: "b3",
//     title: "Sit nam congue feugiat nisl, mauris amet nisi. ",
//   },
// ];
const catego = [
  { text: "Hobbies (14)", color: "#F939BF" },
  { text: "Women (21)" },
  { text: "Women (21)" },
  { text: "Women (21)" },
  { text: "Women (21)" },
  { text: "Women (21)" },
];

const recent = [
  {
    image: "BR1",
  },
  {
    image: "BR2",
  },
  {
    image: "BR3",
  },
  {
    image: "BR4",
  },
];
const sale = [
  {
    image: "BS1",
    title: "Elit ornare in enim mauris.",
  },
  {
    image: "BS2",
    title: "Viverra pulvinar et enim.",
  },
  {
    image: "BS3",
    title: "Mattis varius donec fdsfd",
  },
];
const offer = [
  {
    image: "BO1",
    title: "Duis lectus est.",
  },
  {
    image: "BO2",
    title: "Sed placerat.",
  },
  {
    image: "BO3",
    title: "Netus proin.",
  },
  {
    image: "BO4",
    title: "Platea in.",
  },
];

const tags = [
  { text: "General" },
  { text: "Atsanil" },
  { text: "Insas." },
  { text: "Bibsaas" },
  { text: "Nulla." },
];

const Blog = () => {
  return (
    <div>
      <ShopHero title="Blog Page" />

      <div className="py-6 flex w-mnimun text-[#151875] max-w-[1171px] m-auto justify-between">
        <div className="w-3/4">
          <div className="post mb-8">
            <Image
              src="/b1.png"
              alt="img"
              className="w-full h-auto mb-4"
              width={870}
              height={453}
            />
            <div className="flex flex-col gap-5 mt-8">
              <div className="flex gap-3">
                <div className=" flex items-center gap-2 ">
                  <FaPenNib className="text-pink-500" />
                  <h4 className="text-black bg-[#FFE7F9]">Surf Auxion</h4>
                </div>
                <div className=" flex items-center gap-2">
                  <MdOutlineCalendarMonth className="text-[#FFA454]" />
                  <h4 className="bg-[#FFECE2]">Aug 09 2020</h4>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-[1000] mb-2 text-[#151875]">
                  Mauris at orci non vulputate diam tincidunt nec.
                </h2>
                <div className="text-[#8A8FB9] text-sm  font-bold">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit facilisis quis auctor pretium ipsum, eu rutrum.
                    Condimentum <br /> eu malesuada vitae ultrices in in neque,
                    porta dignissim. Adipiscing purus, cursus vulputate id id
                    dictum at.
                  </p>
                  <p className="pt-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit dapibus est, nunc, montes, lacus consequat integer
                    viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea
                    donec vitae ante posuere malesuada.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                    montes, lacus consequat integer viverra. Sit morbi etiam
                    quam rhoncus. Velit in arcu platea donec vitae ante posuere
                    malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Velit dapibus est, nunc,
                  </p>
                  <p className="pt-12">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo dictum sapien, amet, consequat. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Commodo dictum
                    sapien, amet, consequat toamk risusu”
                  </p>
                </div>
                <div className="flex gap-6 ">
                  <Image src="/SB1.png" alt="img" width={417.74} height={245} />
                  <Image src="/SB2.png" alt="img" width={417.74} height={245} />
                </div>
                <p className="text-[#8A8FB9] text-sm  font-bold pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>
                <div className="flex gap-4">
                  {[
                    { title: "Quam sed", img: "SB3" },
                    { title: "Tristique sed", img: "SB4" },
                    { title: "A etiam", img: "SB5" },
                    { title: "Mi nisi", img: "SB6" },
                  ].map((card, index) => (
                    <div key={index}>
                      <Image
                        src={`/${card.img}.png`}
                        alt="img"
                        width={209.54}
                        height={254.7}
                      />
                      <h4 className="text-[#000000] pl-4 mt-4">{card.title}</h4>
                      <p className="text-xs my-3">
                        <span className="text-[#232A69] mx-2 ">$32.00</span>
                        <span className="text-[#FF38B0]">$56.00</span>
                        {/* <span></span> */}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-[#8A8FB9] text-sm  font-bold">
                  <p className="pt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit dapibus est, nunc, montes, lacus consequat integer
                    viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea
                    donec vitae ante posuere malesuada.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                    montes, lacus consequat integer viverra. Sit morbi etiam
                    quam rhoncus. Velit in arcu platea donec vitae ante posuere
                    malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Velit dapibus est, nunc,
                  </p>
                  <p className="pt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit dapibus est, nunc, montes, lacus consequat integer
                    viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea
                    donec vitae ante posuere malesuada.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                    montes, lacus consequat integer viverra. Sit morbi etiam
                    quam rhoncus. Velit in arcu platea donec vitae ante posuere
                    malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Velit dapibus est, nunc,
                  </p>
                </div>
                <div className="flex gap-3 my-3 justify-center pt-10">
                  <Link href="#" className="">
                    <Image src="/F1.png" height={20} width={20} alt="img" />
                    {/* <FaFacebook className="bg-purple-400 text-white" /> */}
                  </Link>
                  <Link href="#" className="">
                    <Image src="/F2.png" height={20} width={20} alt="img" />
                    {/* <RiInstagramFill className="bg-purple-400 text-white" /> */}
                  </Link>
                  <Link href="#" className="">
                    <Image src="/F3.png" height={20} width={20} alt="img" />
                    {/* <FaTwitter className="bg-purple-400 text-white" /> */}
                  </Link>
                </div>
                <div className="flex bg-[#F7F8FB] justify-between text-[#8A8FB9] text-sm  font-bold h-10 items-center px-6">
                  <p>Previous Post</p>
                  <p>Next Post</p>
                </div>
                <div className="w-[667.68px] mt-16">
                  <div className="flex shadow-lg shadow-[#00000040] items-center p-4">
                    <Image
                      src="/SB7.png"
                      alt="img"
                      width={103.16}
                      height={106.56}
                    />
                    <div className="mx-3">
                      <h1 className="font-extrabold text-lg">
                        Sapien ac
                        <span className="text-[#A3A2B6] text-xs mx-5">
                          Jan 09 2020
                        </span>
                      </h1>
                      <p className="text-[#A3A2B6] text-sm leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At in vitae rutrum vulputate consectetur.
                      </p>
                    </div>
                  </div>
                  <div className="flex shadow-lg shadow-[#00000040] items-center p-4">
                    <Image
                      src="/SB8.png"
                      alt="img"
                      width={103.16}
                      height={106.56}
                    />
                    <div className="mx-3">
                      <h1 className="font-extrabold text-lg">
                        Augue conva
                        <span className="text-[#A3A2B6] text-xs mx-5">
                          Aug 18 2020
                        </span>
                      </h1>
                      <p className="text-[#A3A2B6] text-sm leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At in vitae rutrum vulputate consectetur.
                      </p>
                    </div>
                  </div>
                </div>
                <form>
                  <div className="mt-20">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className="border-2 w-[315px] p-2 text-sm mr-10"
                    />
                    <input
                      type="text"
                      placeholder="Write Your Email*"
                      className="border-2 w-[315px] p-2 text-sm"
                    />
                  </div>
                  <textarea
                    placeholder="Write your comment*"
                    rows={10}
                    className="border-2 w-[670px] text-sm mt-10 p-2"
                  ></textarea>
                  <div className="flex flex-col w-[670px]">
                    <div className="my-4 mb-8">
                      <input type="checkbox" />
                      <label
                        htmlFor="newsletter"
                        className="text-[#8A91AB] text-sm ml-2"
                      >
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <button className="bg-[#FB2E86] text-white p-2">
                      Continue Shipping
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/4 ml-5">
          <h1 className="text-2xl font-black">Search</h1>
          <div className="mb-8 mt-3">
            <div className="flex relative">
              <input
                type="text"
                placeholder="Search For Posts"
                className="w-full p-2 border border-[#BDBDD8] rounded-sm mb-4"
              />
              <CiSearch className="absolute right-[5%] bottom-[50%] text-[#CBCBE0]" />
            </div>
          </div>
          <div className="mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className=" flex list-none flex-wrap gap-3">
                {catego.map((item: { text: string; color?: string }, index) => (
                  <li key={index} className={index == 0 ? "text-white" : ""}>
                    <Link
                      href="#"
                      className="py-2 pl-2 pr-8 rounded"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="my-10">
            <h3 className="text-xl font-bold mb-10">Recent Post</h3>
            <ul className="list-none">
              {recent.map((image: { image: string }, index) => (
                <li key={index} className="my-6">
                  <Link href="#" className="flex items-center gap-2">
                    <Image
                      src={`/${image.image}.png`}
                      alt="img"
                      width={100}
                      height={100}
                      className="object-cover  rounded-sm"
                    />
                    <div className="">
                      <h2 className="text-lg whitespace-nowrap font-semibold">
                        It is a long established fact
                      </h2>
                      <h4 className="text-gray-500"> Aug 09 2020</h4>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Sale Product</h3>
            <ul className="">
              {sale.map((item: { image: string; title: string }, index) => (
                <li key={index} className=" my-4">
                  <Link href="#" className="flex gap-2">
                    <Image
                      src={`/${item.image}.png`}
                      alt="img"
                      width={70}
                      height={57}
                    />
                    <div>
                      <h2 className="text-lg font-black whitespace-nowrap">
                        {item.title}
                      </h2>
                      <h4 className="text-[#8A8FB9] text-sm">Aug 09 2020</h4>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Offer product</h3>
            <ul className="flex flex-wrap items-center gap-4  list-none">
              {offer.map((item: { image: string; title: string }, index) => (
                <li key={index} className=" ">
                  <Link
                    href="#"
                    className="flex flex-col justify-center items-center gap-3"
                  >
                    <Image
                      src={`/${item.image}.png`}
                      alt="img"
                      width={135}
                      height={100}
                      className="object-cover"
                    />
                    <div className="w-[80%] text-center">
                      <h2 className="text-lg font-black  tracking-tighter ">
                        {item.title}
                      </h2>
                      <h4 className="text-sm font-bold text-[#8A8FB9]">
                        $12.00 - $15.00
                      </h4>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Follow</h1>
            <div className="flex gap-3 my-3">
              <Link href="#" className="">
                <Image src="/F1.png" height={20} width={20} alt="img" />
                {/* <FaFacebook className="bg-purple-400 text-white" /> */}
              </Link>
              <Link href="#" className="">
                <Image src="/F2.png" height={20} width={20} alt="img" />
                {/* <RiInstagramFill className="bg-purple-400 text-white" /> */}
              </Link>
              <Link href="#" className="">
                <Image src="/F3.png" height={20} width={20} alt="img" />
                {/* <FaTwitter className="bg-purple-400 text-white" /> */}
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4">Tags</h3>
            <ul className=" gap-y-3 gap-x-10 flex flex-wrap list-none ">
              {tags.map((item, index) => (
                <li
                  key={index}
                  className={
                    index === 1 ? "text-[#FB2E86] decoration-[#FB2E86]" : ""
                  }
                >
                  <Link href="#" className="font-semibold underline">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center mt-4">
        <div className="flex gap-8">
          <div className="w-[25px] h-[22px] text-center text-white bg-[#FB2CA8] rounded-sm">
            1
          </div>
          <div className="w-[25px] h-[22px] text-center border border-[#E0D3F5] text-[#E0D3F5] rounded-sm">
            2
          </div>
          <div className="w-[25px] h-[22px] text-center border border-[#E0D3F5] text-[#E0D3F5] rounded-sm">
            3
          </div>
          <div className="w-[25px] h-[22px] text-center border border-[#E0D3F5] text-[#E0D3F5] rounded-sm">
            4
          </div>
        </div>
      </div> */}
      <Brands />
    </div>
  );
};

export default Blog;

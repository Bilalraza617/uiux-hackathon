import Shopex from "@/components/Shopex";
import ShopHero from "@/components/ShopHero";
import Image from "next/image";

const page = () => {
  return (
    <>
      <ShopHero title="About Us" />
      <div className="flex m-auto items-center max-w-[1171px] mt-20  w-[95%]">
        <div className=" p-4 flex flex-col md:flex-row gap-5">
          <div
            className=" rounded max-w-[50vh]"
            style={{ boxShadow: "-20px 12px  0px 5px #2B3CAB" }}
          >
            <Image
              src="/A_U.png"
              alt="Business Meeting"
              className=" object-cover rounded-md"
              width={555}
              height={390}
            />
          </div>
          <div className="flex flex-col items-start justify-center ">
            <h1 className="text-3xl text-[#151875] font-bold mb-4">
              Know About Our Ecommerce <br /> Business, History
            </h1>
            <p className="text-[#8A8FB9] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices <br /> mattis aliquam, malesuada diam est.
              Malesuada sem tristique amet erat vitae <br /> eget dolor
              lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <button className="bg-[#FB2E86] text-white py-2 px-4 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Shopex />
    </>
  );
};

export default page;

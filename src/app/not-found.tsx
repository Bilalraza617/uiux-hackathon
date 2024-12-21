import Link from "next/link";
import Image from "next/image";
import ShopHero from "@/components/ShopHero";
import Brands from "@/components/Brands";

const Custom404 = () => (
  <>
    <ShopHero title="404 Not Found" />
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center  relative">
        <Image
          src="/404.png"
          alt="404 Illustration"
          // className="w-48 h-48 object-cover"
          width={913}
          height={526.6}
        />
      </div>
      <h1 className="text-3xl text-[#152970]  font-bold absolute bottom-12 left-[410px]">
        Oops!
      </h1>

      <Link href="/ " className="bg-[#FB2E86] text-white py-2 px-6 rounded-md ">
        Back To Home
      </Link>
    </div>
    <Brands />
  </>
);

export default Custom404;

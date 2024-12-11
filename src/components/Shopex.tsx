import Image from "next/image";

const features = [
  {
    image: "S1",
  },
  {
    image: "S2",
  },
  {
    image: "S3",
  },
  {
    image: "S4",
  },
];

export default function Shopex() {
  return (
    <div className=" py-12 text-[#151875]">
      <div>
        <h2 className="text-5xl  text-center font-extrabold">
          What Shopex Offer!
        </h2>
        <div className="mt-10 flex justify-center gap-7">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex w-[270px] h-[320px] flex-col justify-center gap-3 shadow-md p-5 text-center"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={`/${feature.image}.png`}
                  alt="img"
                  width={65}
                  height={65}
                  className=" object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl leading-6 font-medium">
                24/7 Support
              </h3>
              <p className="mt-2 text-base text-[#1A0B5B4D]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

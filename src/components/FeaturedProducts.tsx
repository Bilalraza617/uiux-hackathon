import Image from "next/image";

const item = [
  {
    image: "1",
  },
  {
    image: "2",
  },
  {
    image: "3",
  },
  {
    image: "4",
  },
];

const Featuredproducts = () => {
  return (
    <div className="my-32">
      <h1 className="text-5xl  text-center font-extrabold">
        Featured Products
      </h1>
      <div className="">
        <div className="flex items-center justify-between w-[90%]  m-auto my-10">
          {item.map((data: { image: string }, index) => {
            return (
              <div
                key={index}
                className="w-[270px] h-[361px] shadow-lg rounded"
              >
                <div className=" w-[270px]  h-[236px] bg-gray-100  rounded">
                  <Image
                    src={`/${data.image}.png`}
                    alt={"Product"}
                    width={900}
                    height={900}
                    className="object-cover h-full p-10 bg-gray-100 rounded"
                  />
                  {/* <button className="absolute bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                    View Details
                  </button> */}
                </div>
                <div>
                  <div className="details my-4 flex flex-col justify-center items-center gap-1">
                    <h3 className="text-xl font-bold text-pinkDefault">
                      Cantilever chair
                    </h3>
                    <p>Code - Y523201</p>

                    <div className="flex items-center justify-center gap-2">
                      {["#05E6B7", "#F701A8", "#00009D"].map((code, index) => (
                        <div
                          key={index}
                          className="w-4 h-1 rounded-full"
                          style={{ backgroundColor: code }}
                        ></div>
                      ))}
                    </div>

                    <p className="text-lg font-semibold">$42.00</p>
                  </div>
                </div>
                {/* </div> */}
              </div>
            );
          })}
        </div>

        <div className="colors flex gap-2 mt-2">
          <div className={`color-option rounded-full w-6 h-6`} />
        </div>
      </div>
    </div>
  );
};

export default Featuredproducts;

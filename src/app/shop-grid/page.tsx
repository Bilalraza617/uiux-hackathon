import ShopHero from "@/components/ShopHero";
import Brands from "@/components/Brands";
import ProductGrid from "@/components/ProductGrid";

const ShopGrid = () => {
  return (
    <>
      <ShopHero title="Shop Grid Default" />

      <div className="bg-white flex-wrap flex items-center justify-between w-[90%] max-w-[1121px] m-auto mt-40">
        <div>
          <h2 className="text-xl text-custumBlue font-bold">
            Ecommerce Acceories & Fashion Items
          </h2>
          <p className="text-sm text-gray-400">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div>
            <span>Per Page:</span>
            <select name="sort" id="sort" className="text-gray-400">
              <option value="BestMatch">1</option>
            </select>
          </div>
          <div>
            <span>Sort By:</span>
            <select name="sort" id="sort" className="text-gray-400">
              <option value="BestMatch">Best Match</option>
            </select>
          </div>
          <div>
            <span>View:</span>
            <input type="text" />
          </div>
        </div>
      </div>
      <ProductGrid />
      <Brands />
    </>
  );
};

export default ShopGrid;

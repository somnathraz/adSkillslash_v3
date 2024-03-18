import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";

const PricingSection = () => {
  return (
    <div className="flex flex-col justify-center items-center min-[642px]:hidden">
      <div className="flex flex-col py-4 px-5 bg-[#fff5f1] mx-4 rounded w-[80%] relative">
        <h3 className="text-[16px] font-bold text-left py-1 w-max mb-2">
          Course Price
        </h3>
        <h3 className="text-[32px] font-bold w-max text-[#4b4b4b]">₹ 9,999</h3>
        <FcMoneyTransfer className="absolute right-6 top-6 text-6xl" />
        <div className="flex flex-col mt-[20px] gap-4 w-full">
          <div>
            <button className="flex flex-col justify-center items-center bg-[#f18350] py-2 w-full">
              Free Counselling
            </button>
            {/* <hr className="border-b-2 border-b-[#2e2e2e] rounded-2xl w-full" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

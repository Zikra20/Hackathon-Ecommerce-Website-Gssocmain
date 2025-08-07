import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { GoCreditCard } from "react-icons/go";

const Card1 = () => {
  return (
    <>
      {/* Features Section */}
      <div className="container mx-auto px-6 md:px-11 lg:mt-8">
        <h3 className="text-3xl font-bold text-center text-[#2A254B] dark:text-[#5c1a32] mb-10">
          What makes our brand different
        </h3>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:p-7 sm:ml-8">
          {/* First Grid Item */}
          <div className="text-center flex flex-col items-center bg-white dark:bg-[#ffe4e6] p-4 hover:bg-gray-200 dark:hover:bg-[#ffc1d6] transition-all duration-300 ease-in-out">
            <TbTruckDelivery className="text-4xl text-[#2A254B] dark:text-[#5c1a32]" />
            <h4 className="mt-3 font-[400] text-lg mb-2 text-[#2A254B] dark:text-[#5c1a32]">
              Next day as standard
            </h4>
            <p className="text-center text-[#2A254B] dark:text-[#5c1a32]">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>

          {/* Second Grid Item */}
          <div className="text-center flex flex-col items-center bg-white dark:bg-[#ffe4e6] p-4 hover:bg-gray-200 dark:hover:bg-[#ffc1d6] transition-all duration-300 ease-in-out">
            <IoMdCheckmark className="text-4xl text-[#2A254B] dark:text-[#5c1a32]" />
            <h4 className="mt-3 font-[400] text-lg mb-2 text-[#2A254B] dark:text-[#5c1a32]">
              Made by true artisans
            </h4>
            <p className="text-center text-[#2A254B] dark:text-[#5c1a32]">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>

          {/* Third Grid Item */}
          <div className="text-center flex flex-col items-center bg-white dark:bg-[#ffe4e6] p-4 hover:bg-gray-200 dark:hover:bg-[#ffc1d6] transition-all duration-300 ease-in-out">
            <GoCreditCard className="text-4xl text-[#2A254B] dark:text-[#5c1a32]" />
            <h4 className="mt-3 font-[400] text-lg mb-2 text-[#2A254B] dark:text-[#5c1a32]">
              Unbeatable prices
            </h4>
            <p className="text-center text-[#2A254B] dark:text-[#5c1a32]">
              For our materials and quality you won’t find better prices anywhere.
            </p>
          </div>

          {/* Fourth Grid Item */}
          <div className="text-center flex flex-col items-center bg-white dark:bg-[#ffe4e6] p-4 hover:bg-gray-200 dark:hover:bg-[#ffc1d6] transition-all duration-300 ease-in-out">
            <LuSprout className="text-4xl text-[#2A254B] dark:text-[#5c1a32]" />
            <h4 className="mt-3 font-[400] text-lg mb-2 text-[#2A254B] dark:text-[#5c1a32]">
              Recycled packaging
            </h4>
            <p className="text-center text-[#2A254B] dark:text-[#5c1a32]">
              We ensure minimal environmental impact.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="p-4 w-[170px] h-[56px] text-[#2A254B] dark:text-[#5c1a32] bg-gray-200 dark:bg-[#ffdce6] border-0 focus:outline-none hover:bg-black hover:text-white dark:hover:bg-[#ffb3c1] dark:hover:text-[#2A254B] text-lg transition">
            View collection
          </button>
        </div>
      </div>
    </>
  );
};

export default Card1;

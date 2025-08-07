import React from 'react';
import Image from 'next/image';

const ProductTwo = () => {
  return (
    <div className="w-full h-auto bg-[#FAFAFA] dark:bg-[#2A1E2F] mt-11 transition-all duration-300">
      <section className="py-16 bg-[#FAFAFA] dark:bg-[#2A1E2F]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-normal text-center text-[#2A254B] dark:text-[#FBE4EC] mb-10">
            Our popular products
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              { img: "/lsofa.png", name: "The Popular suede sofa", price: "£980" },
              { img: "/chairb.png", name: "The Dandy chair", price: "£350" },
              { img: "/botal.png", name: "The Dandy chair", price: "£250" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FAFAFA] dark:bg-[#3B2A40] w-full md:w-full lg:w-[30%] h-auto shadow-lg p-4 rounded-lg transition duration-300">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={500}
                  height={375}
                  className="w-full h-[375px] object-cover mb-4 rounded-md"
                />
                <h4 className="text-lg font-semibold text-[#2A254B] dark:text-[#FBE4EC] text-center">
                  {item.name}
                </h4>
                <p className="text-[#2A254B] dark:text-[#FFD6E8] text-center">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-5 mb-5">
        <button className="mb-8 p-4 w-[170px] h-[56px] text-[#2A254B] dark:text-[#FBE4EC] bg-gray-200 dark:bg-[#5A3B50] border-0 hover:bg-black hover:text-white dark:hover:bg-pink-300 dark:hover:text-black text-lg rounded-lg transition duration-300">
          View collection
        </button>
      </div>
    </div>
  );
};

export default ProductTwo;

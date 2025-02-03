import React from 'react';
import Image from 'next/image'; // Import the Image component

const ProductTwo = () => {
  return (
    <div className="w-full h-auto bg-[#FAFAFA] mt-11">
      {/* Product Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-normal text-center text-[#2A254B] mb-10">
            Our popular products
          </h2>

          {/* Responsive Layout for Products */}
          <div className="flex flex-wrap justify-center gap-10">
            {/* First Product */}
            <div className="bg-[#FAFAFA] w-full md:w-full lg:w-[30%] h-auto shadow-lg p-4">
              <Image
                src="/lsofa.png"
                alt="Sofa"
                width={500}  // Set width and height
                height={375}
                className="w-full h-[375px] object-cover mb-4 rounded-md"
              />
              <h4 className="text-lg font-semibold text-[#2A254B] text-center">
                The Popular suede sofa
              </h4>
              <p className="text-[#2A254B] text-center">£980</p>
            </div>

            {/* Second Product */}
            <div className="bg-[#FAFAFA] w-full md:w-1/2 lg:w-[30%] h-auto shadow-lg p-4">
              <Image
                src="/chairb.png"
                alt="Chair"
                width={500}  // Set width and height
                height={375}
                className="w-full h-[375px] object-cover mb-4 rounded-md"
              />
              <h4 className="text-lg font-semibold text-[#2A254B] text-center">
                The Dandy chair
              </h4>
              <p className="text-[#2A254B] text-center">£350</p>
            </div>

            {/* Third Product */}
            <div className="bg-[#FAFAFA] w-full md:w-1/2 lg:w-[30%] h-auto shadow-lg p-4">
              <Image
                src="/botal.png"
                alt="Vase"
                width={500}  // Set width and height
                height={375}
                className="w-full h-[375px] object-cover mb-4 rounded-md"
              />
              <h4 className="text-lg font-semibold text-[#2A254B] text-center">
                The Dandy chair
              </h4>
              <p className="text-[#2A254B] text-center">£250</p>
            </div>
          </div>
        </div>
      </section>

      {/* Button */}
      <div className="flex justify-center mt-5 mb-5">
        <button className="mb-8 p-4 w-[170px] h-[56px] text-[#2A254B] bg-gray-200 border-0 focus:outline-none hover:bg-black hover:text-white text-lg">
          View collection
        </button>
      </div>
    </div>
  );
};

export default ProductTwo;

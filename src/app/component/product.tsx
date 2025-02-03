import React from 'react';
import Image from 'next/image'; // Import the Image component

const Product = () => {
  return (
    <div className="w-full h-auto bg-[#FAFAFA] mt-11">
      {/* Product Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          {/* Centered Heading */}
          <h3 className="text-3xl font-normal text-center text-[#2A254B] mb-10">
            New Ceramics
          </h3>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {/* First Product */}
            <div className="bg-[#FAFAFA] w-full h-auto shadow-lg p-4 rounded-lg">
              <Image
                src="/chair.png"
                alt="Chair"
                width={500}  // Set width and height
                height={375}
                className="w-full h-[375px] object-cover mb-4 rounded-md"
              />
              <h4 className="text-lg font-semibold text-[#2A254B] text-center">
                The Dandy Chair
              </h4>
              <p className="text-[#2A254B] text-center">£250</p>
            </div>

            {/* Second Product */}
            <div className="bg-[#FAFAFA] w-full h-auto shadow-lg p-4 rounded-lg">
              <Image
                src="/vase.png"
                alt="Lamp"
                width={500}  // Set width and height
                height={375}
                className="w-full h-[375px] object-cover mb-4 rounded-md"
              />
              <h4 className="text-lg font-semibold text-[#2A254B] text-center">
                The Lucky Lamp
              </h4>
              <p className="text-[#2A254B] text-center">£399</p>
            </div>

            {/* Third Product */}
            <div className="bg-[#FAFAFA] w-full h-auto shadow-lg p-4 rounded-lg">
              <Image
                src="/botal.png"
                alt="Vase"
                width={500}  // Set width and height
                height={375}
                className="w-full h-[375px] object-cover mb-4 rounded-md"
              />
              <h4 className="text-lg font-semibold text-[#2A254B] text-center">
                Rustic Vase Set
              </h4>
              <p className="text-[#2A254B] text-center">£155</p>
            </div>

            {/* Fourth Product */}
            <div className="bg-[#FAFAFA] w-full h-auto shadow-lg p-4 rounded-lg">
              <Image
                src="/lamp.png"
                alt="Table"
                width={500}  // Set width and height
                height={375}
                className="w-full h-[375px] object-cover mb-4 rounded-md"
              />
              <h4 className="text-lg font-semibold text-[#2A254B] text-center">
                The Stanley Table
              </h4>
              <p className="text-[#2A254B] text-center">£125</p>
            </div>
          </div>

          {/* Centered Button */}
          <div className="flex justify-center mt-8">
            <button className="p-4 w-[170px] h-[56px] text-[#2A254B] bg-gray-200 border-0 focus:outline-none hover:bg-black hover:text-white text-lg rounded-lg transition duration-300">
              View collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;

import React from 'react';
import Image from 'next/image'; // Import Image from next/image

const Hero = () => {
  return (
    <div className="container mx-auto px-6 md:px-11 mt-10">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-left space-y-6 sm:px-4 sm:py-6">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A254B] sm:mb-4 lg:mb-48">
              The furniture brand for the future&apo;, with timeless designs
            </h2>
            {/* Paragraph */}
            <p className="text-lg md:text-xl text-[#2A254B] leading-relaxed sm:mb-6">
              A new era in eco-friendly furniture with Avelon the French luxury retail brand with nice fonts tasteful colors and a beautiful way to display things digitally using modern web technologies.
            </p>
            {/* Button */}
            <div className="sm:mt-4">
              <button className="p-4 w-[170px] h-[56px] text-[#2A254B] bg-gray-200 border-0 focus:outline-none hover:bg-black hover:text-white text-lg transition-all duration-300 ease-in-out">
                View collection
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/chair.png"
              alt="Chair"
              width={500} // Specify width for optimization
              height={500} // Specify height for optimization
              className="w-full max-w-[400px] md:max-w-[500px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

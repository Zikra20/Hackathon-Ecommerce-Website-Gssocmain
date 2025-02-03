import React from 'react';
import Image from 'next/image'; // Import Image from next/image

const CardLast = () => {
  return (
    <div>
      <section className="w-full min-h-[603px] bg-[#FAFAFA] text-[#FFFFFF]">
        <div className="container mx-auto px-5 py-24 flex flex-col md:flex-row items-center gap-10">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <Image
              className="object-cover rounded-lg max-w-full h-auto"
              alt="sofa"
              src="/sofa.png"
              width={600} // Set a width for the image
              height={400} // Set a height for the image
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center items-start text-[#2A254B] w-full md:w-1/3 ">
            <h2 className="text-2xl sm:text-3xl font-normal leading-snug mb-4 sm:p-7 sm:ml-8">
              From a studio in London to a global brand with over 400 outlets
            </h2>
            <p className="text-[16px] font-[400] sm:text-lg leading-relaxed mb-3 sm:p-7 sm:ml-8">
              When we started Avion the idea was simple. Make high-quality furniture affordable and available for the mass market.
            </p>
            <p className="text-[16px] font-[400] sm:text-lg leading-relaxed mb-3 sm:p-7 sm:ml-8">
              Handmade&apo;, and lovingly crafted furniture and homeware is what we live breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
            </p>
            <button className="p-4 w-[170px] h-[56px] text-[#2A254B] mt-4 bg-gray-200 border-0 focus:outline-none hover:bg-black hover:text-white text-lg sm:p-1 sm:ml-14">
              View collection
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CardLast;

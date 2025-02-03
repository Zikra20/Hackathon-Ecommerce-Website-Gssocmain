import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { GoCreditCard } from "react-icons/go";
import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      {/* Full-width Image as Background */}
      <section className="w-full h-[704px] relative text-[#22202E]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/2corner.jpg')" }}>
        </div>

        {/* Content Section */}
        <div className="relative container mx-auto flex items-center justify-center h-full px-5">
          <div className="w-full sm:w-[500px] bg-white p-8 shadow-lg text-center md:ml-auto md:mr-[5%] lg:ml-auto lg:mr-[5%]">
            <h2 className="text-2xl sm:text-4xl font-medium mb-6">
              Luxury homeware for people who love timeless design quality
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              Shop the new Spring 2022 collection today
            </p>
            <button className="mt-6 p-3 px-6 bg-[#F9F9F926] border border-[#22202E] text-[#22202E] hover:bg-[#22202E] hover:text-white transition">
              View collection
            </button>
          </div>
        </div>


      </section>

      {/* Features Section */}
      <div className="container mx-auto px-6 md:px-11 sm:mt-8">
        <h3 className="text-3xl font-bold text-center text-[#2A254B] mb-10"> What makes our brand different</h3>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:p-7 sm:ml-8">
          {/* First Grid Item */}
          <div className="text-center flex flex-col items-center bg-white p-4 hover:bg-gray-200 transition-all duration-300 ease-in-out">
            <TbTruckDelivery className="text-4xl text-[#2A254B]" />
            <h4 className="mt-3 font-[400] text-lg mb-2 text-[#2A254B]">Next day as standard</h4>
            <p className="text-center">Order before 3pm and get your order the next day as standard</p>
          </div>

          {/* Second Grid Item */}
          <div className="text-center flex flex-col items-center bg-white p-4 hover:bg-gray-200 transition-all duration-300 ease-in-out">
            <IoMdCheckmark className="text-4xl text-[#2A254B]" />
            <h4 className="mt-3 font-[400] text-lg mb-2">Made by true artisans</h4>
            <p className="text-center">Handmade crafted goods made with real passion and craftsmanship</p>
          </div>

          {/* Third Grid Item */}
          <div className="text-center flex flex-col items-center bg-white p-4 hover:bg-gray-200 transition-all duration-300 ease-in-out">
            <GoCreditCard className="text-4xl text-[#2A254B]" />
            <h4 className="mt-3 font-[400] text-lg mb-2">Unbeatable prices</h4>
            <p className="text-center">For our materials and quality you wont find better prices anywhere</p>
          </div>

          {/* Fourth Grid Item */}
          <div className="text-center flex flex-col items-center bg-white p-4 hover:bg-gray-200 transition-all duration-300 ease-in-out">
            <LuSprout className="text-4xl text-[#2A254B]" />
            <h4 className="mt-3 font-[400] text-lg mb-2">Recycled packaging</h4>
            <p className="text-center">We ensure minimal environmental impact</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8 md:justify-center">
          <button className="p-4 w-[170px] h-[56px] text-[#2A254B] bg-gray-200 border-0 focus:outline-none hover:bg-black hover:text-white text-lg">
            View collection
          </button>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-normal text-left text-[#2A254B] mb-10">New Ceramics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#FAFAFA] shadow-lg hover:bg-gray-200">
              <Image src="/chair.png" alt="Chair" width={500} height={375} className="w-full h-[375px] object-cover mb-4" />
              <h4 className="text-lg font-semibold text-[#2A254B]">The Dandy Chair</h4>
              <p className="text-[#2A254B]">£250</p>
            </div>

            <div className="bg-[#FAFAFA] shadow-lg hover:bg-gray-200">
              <Image src="/vase.png" alt="Lamp" width={500} height={375} className="w-full h-[375px] object-cover mb-4" />
              <h4 className="text-lg font-semibold text-[#2A254B]">The Lucky Lamp</h4>
              <p className="text-[#2A254B]">£399</p>
            </div>

            <div className="bg-[#FAFAFA] shadow-lg hover:bg-gray-200">
              <Image src="/botal.png" alt="Vase" width={500} height={375} className="w-full h-[375px] object-cover mb-4" />
              <h4 className="text-lg font-semibold text-[#2A254B]">Rustic Vase Set</h4>
              <p className="text-[#2A254B]">£155</p>
            </div>

            <div className="bg-[#FAFAFA] shadow-lg hover:bg-gray-200">
              <Image src="/lamp.png" alt="Table" width={500} height={375} className="w-full h-[375px] object-cover mb-4" />
              <h4 className="text-lg font-semibold text-[#2A254B]">The Stanley Table</h4>
              <p className="text-[#2A254B]">£125</p>
            </div>
          </div>
          <button className="ml-auto p-4 w-[170px] h-[56px] text-[#2A254B] my-[16px] mx-[32px] bg-gray-200 border-0 focus:outline-none hover:bg-black hover:text-white text-lg">
            View collection
          </button>
        </div>
      </section>

      {/* Sofa Section */}
      <section className="w-full min-h-[603px] bg-[#FAFAFA] text-[#FFFFFF]">
        <div className="container mx-auto flex flex-col sm:flex-row px-5 py-24 items-center gap-10">
          {/* Text Section */}
          <div className="bg-[#2A254B] sm:w-1/2 w-full h-[460px] flex justify-start items-start p-14">
            <div className="flex flex-col justify-between h-full text-left text-[#FAFAFA]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-normal leading-snug mb-4">It started with a small idea</h2>
                <p className="text-[16px] font-[400] sm:text-lg leading-relaxed mb-6">
                  A global brand with local beginnings our story began in a small studio in South London in early 2014 </p>
              </div>
              <button className="p-4 w-[170px] h-[56px] text-[#2A254B] bg-gray-200 border-0 focus:outline-none hover:bg-gray-400 hover:text-gray-900 text-lg self-start">
                View collection
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="sm:w-1/2 md:w-1/3 lg:w-1/4  w-full flex justify-center items-center   ">
            <Image
              className="object-cover rounded-lg max-w-full h-auto"
              alt="hero"
              src="/ysofa.png"
              width={500}
              height={375}
            />
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section className="relative bg-cover bg-center w-full h-[444px]">
  <div
    className="absolute inset-0 w-full h-[364px] mt-[52px]"
    style={{
      backgroundImage: "url('/bg1.jpg')",
      backgroundSize: "cover", // Image container ke andar fit hogi
      backgroundPosition: "center", // Image ko center align kiya gaya
      backgroundRepeat: "no-repeat", // Image repeat nahi hogi
    }}
  ></div>
  <div className="container mx-auto px-5 py-24 w-full sm:w-[571px] relative text-center text-[#2A254B]">
    <h2 className="text-4xl font-semibold mb-2 text-[#FAFAFA]">
      Join the club and get the benefits
    </h2>
    <p className="text-lg mb-6 text-[#FAFAFA]">
      Sign up for our newsletter and receive exclusive offers on new ranges,
      sales, pop-up stores, and more
    </p>

    <div className="flex flex-wrap justify-center mb-6 gap-4">
      <label className="flex items-center">
        <input
          type="radio"
          name="offer"
          className="form-radio text-[#FAFAFA]"
        />
        <span className="ml-2 text-[#FAFAFA]">Exclusive offers</span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="offer"
          className="form-radio text-[#FAFAFA]"
        />
        <span className="ml-2 text-[#FAFAFA]">Free events</span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="offer"
          className="form-radio text-[#FAFAFA]"
        />
        <span className="ml-2 text-[#FAFAFA]">Product giveaways</span>
      </label>
    </div>

    <div className="flex flex-col sm:flex-row sm:w-1/2 md:w-1/3 lg:w-1/4 justify-center items-center mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-3 mb-4 sm:mb-0 rounded-md w-full sm:w-[500px]"
      />
      <button className="bg-[#2A254B] text-white px-6 py-3 rounded-md w-full sm:w-auto">
        Subscribe
      </button>
    </div>
  </div>
</section>


    </div>
  );
};

export default HomePage;

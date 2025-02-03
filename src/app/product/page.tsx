import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { GoCreditCard } from "react-icons/go";
import Image from 'next/image'; // For optimized images

const ProductTwo = () => {
  return (
    <div>
      {/* Product Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-5 flex flex-wrap lg:flex-nowrap items-start lg:items-center">
          {/* Left: Product Image */}
          <div className="lg:w-1/2 w-full px-4 mb-10 lg:mb-0 flex justify-center">
            <Image
              src="/dbchair.jpg" // Update with actual image path
              alt="The Dandy Chair"
              width={500} // Increased width
              height={350} // Increased height
              className="max-w-full h-auto object-contain rounded-md shadow-lg"
            />
          </div>

          {/* Right: Product Details */}
          <div className="lg:w-1/2 w-full px-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center lg:text-left leading-loose">
              The Dandy Chair
            </h2>
            <p className="text-xl text-gray-700 mb-10 text-center lg:text-left leading-loose">£250</p>

            <h3 className="text-lg font-medium text-gray-900 mb-5">Description</h3>
            <p className="text-gray-600 mb-10 leading-relaxed">
              A timeless design with premium materials features as one of our most popular and iconic pieces.
              The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mb-5">Dimensions</h3>
            <ul className="list-none mb-10 space-y-3 leading-relaxed">
              <li>Height: 110cm</li>
              <li>Width: 75cm</li>
              <li>Depth: 50cm</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mb-5">Amount</h3>
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center">
                <button className="border p-2 text-lg">-</button>
                <input
                  type="number"
                  value="1"
                  className="w-16 text-center border px-3 py-2 text-lg mx-3"
                  min="1"
                />
                <button className="border p-2 text-lg">+</button>
              </div>
              <button className="bg-[#2A254B] text-white py-2 px-8 text-lg hover:bg-[#2A254B]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Card */}
            {[ 
              { img: "/chair.png", title: "The Dandy Chair", price: "£250" },
              { img: "/vase.png", title: "The Lucky Lamp", price: "£399" },
              { img: "/botal.png", title: "Rustic Vase Set", price: "£155" },
              { img: "/lamp.png", title: "The Stanley Table", price: "£125" }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-[#FAFAFA] h-[520px] shadow-lg flex flex-col items-center hover:bg-gray-100 transition-all duration-300"
              >
                <Image
                  src={product.img}
                  alt={product.title}
                  width={305}
                  height={375}
                  className="w-full h-auto object-cover mb-4"
                />
                <h4 className="text-lg font-semibold text-[#2A254B]">{product.title}</h4>
                <p className="text-[#2A254B]">{product.price}</p>
              </div>
            ))}
          </div>

          {/* View Collection Button */}
          <div className="flex justify-center mt-8">
            <button className="p-4 w-[170px] h-[56px] text-[#2A254B] bg-gray-200 border-0 focus:outline-none hover:bg-black hover:text-white text-lg transition-all duration-300">
              View Collection
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="container mx-auto px-6 md:px-11">
        <h3 className="text-3xl font-bold text-center text-[#2A254B] mb-10">
          What makes our brand different
        </h3>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:p-7 sm:ml-8">
          {/* First Grid Item */}
          <div className="text-center flex flex-col items-center bg-white p-4 hover:bg-gray-200 transition-all duration-300 ease-in-out">
            <TbTruckDelivery className="text-4xl text-[#2A254B]" />
            <h4 className="mt-3 font-[400] text-lg mb-2 text-[#2A254B]">Next day as standard</h4>
            <p className="text-center">Order before 3pm and get your order the next day as standard.</p>
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
            <p className="text-center">We ensure minimal environmental impact.</p>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="p-4 w-[170px] h-[56px] text-[#2A254B] bg-gray-200 border-0 focus:outline-none hover:bg-black hover:text-white text-lg">
            View collection
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="relative bg-cover bg-center w-full h-[481px]" style={{ backgroundImage: "url('/path_to_your_image.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Content */}
        <div className="container mx-auto px-4 py-24 relative text-center text-[#2A254B]">
          <h2 className="text-3xl font-semibold mb-4">Join the club and get the benefits</h2>
          <p className="text-lg mb-6">Sign up for our newsletter and receive exclusive offers on new ranges&apo;, sales&apo;, pop-up stores&apo;, and more</p>

          {/* Radio buttons */}
          <div className="flex justify-center mb-6 space-x-6">
            <label className="flex items-center">
              <input type="radio" name="offer" className="form-radio text-[#2A254B]" />
              <span className="ml-2">Exclusive offers</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="offer" className="form-radio text-[#2A254B]" />
              <span className="ml-2">Free events</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="offer" className="form-radio text-[#2A254B]" />
              <span className="ml-2">Large discounts</span>
            </label>
          </div>

          {/* Email input and button */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full md:w-36 p-4 text-lg bg-[#F9F9F9] mb-4 md:mb-0 rounded-md border border-[#ddd] "
            />
            <button className="bg-[#2A254B] w-full md:w-auto h-[59px] px-8 text-center text-white text-lg rounded-md hover:bg-[#1d1a35]">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductTwo;

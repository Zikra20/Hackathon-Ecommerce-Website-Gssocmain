import React from "react";

const SignUp = () => {
  return (
    <section
      className="relative bg-cover bg-center w-full h-[481px] md:h-[550px] lg:h-[550px]"
      style={{ backgroundImage: "url('path_to_your_image.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#FFFFFF] opacity-60 md:opacity-80 lg:opacity-80"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-32 relative text-center text-[#2A254B]">
        <h2 className="text-3xl font-semibold mb-2 md:text-4xl lg:text-4xl">
          Join the club and get the benefits
        </h2>
        <p className="text-lg mb-6 md:text-xl lg:text-xl">
          Sign up for our newsletter and receive exclusive offers on new ranges&apo;, sales&apo;, pop-up stores&apo;, and more
        </p>

        <div className="flex justify-center mb-6 space-x-6 flex-wrap">
          <label className="flex items-center">
            <input
              type="radio"
              name="offer"
              aria-label="Exclusive offers"
              className="form-radio text-[#2A254B]"
            />
            <span className="ml-2">Exclusive offers</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="offer"
              aria-label="Free events"
              className="form-radio text-[#2A254B]"
            />
            <span className="ml-2">Free events</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="offer"
              aria-label="Large discounts"
              className="form-radio text-[#2A254B]"
            />
            <span className="ml-2">Large discounts</span>
          </label>
        </div>

        <div className="flex justify-center flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-96 lg:w-96 p-4 text-lg bg-[#F9F9F9] rounded-md"
            aria-label="Email address"
          />
          <button className="bg-[#2A254B] text-white p-4 text-lg rounded-md hover:bg-[#3C2A5A] transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

import React from "react"; 

import { TbTruckDelivery } from "react-icons/tb"; 
import { IoMdCheckmark } from "react-icons/io"; 
import { LuSprout } from "react-icons/lu"; 
import { GoCreditCard } from "react-icons/go"; 
import Image from "next/image"; // Importing the Image component from Next.js

const About = () => { 
  return ( 
    <div> 
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center w-full h-[277px] bg-[#FFFFFF]" 
        style={{ backgroundImage: "url('path_to_your_image.jpg')" }} 
      > 
        <div className="absolute inset-0 bg-[#FFFFFF] w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-full mt-[52px] ml-6 sm:ml-12 md:ml-16 lg:ml-24"></div> 
        <div className="container mx-auto px-4 py-24 w-full flex justify-between items-center relative text-center text-[#2A254B]"> 
          {/* Text Section */}
          <div className="text-left w-3/4 p-4"> 
            <h2 className="text-3xl font-[300px] ml-10 text-[#2A254B] mb-2"> 
              A brand built on the love of craftmanship 
              <br /> 
              quality and outstanding customer service 
            </h2> 
          </div> 

          {/* Button Section */}
          <div className="w-full flex justify-center items-center mx-auto"> 
  <button className="bg-[#F9F9F9] w-full sm:w-[192px] h-[56px] text-[#2A254B] p-4 text-lg hover:bg-black hover:text-white rounded-lg"> 
    View our products 
  </button> 
</div>

        </div> 
      </section> 

      {/* Sofa Section */}
      <section className="w-full min-h-[603px] bg-[#FAFAFA] text-[#FFFFFF]"> 
        <div className="container mx-auto flex flex-col md:flex-row lg:flex-row px-5 py-24 items-center gap-10"> 
          {/* Text Section */}
          <div className="bg-[#2A254B] lg:w-1/2 md:w-1/2 w-full h-[460px] flex justify-start items-start p-14"> 
            <div className="flex flex-col justify-between h-full text-left text-[#FAFAFA]"> 
              <div> 
                <h2 className="text-2xl sm:text-3xl font-normal leading-snug mb-4"> 
                  It started with a small idea 
                </h2> 
                <p className="text-[16px] font-[400] sm:text-lg leading-relaxed mb-6"> 
                  A global brand with local beginnings, our story began in a 
                  small studio in South London in early 2014 
                </p> 
              </div> 
              <button className="p-4 w-[170px] h-[56px] text-[#2A254B] bg-gray-200 border-0 focus:outline-none hover:bg-black hover:text-white text-lg self-start"> 
                View collection 
              </button> 
            </div> 
          </div> 

          {/* Image Section */}
          <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center items-center"> 
            <Image 
              className="object-cover rounded-lg max-w-full h-auto" 
              alt="hero" 
              src="/ysofa.png" // Make sure the image is in the public folder 
              width={500} // Specify width 
              height={300} // Specify height 
            /> 
          </div> 
        </div> 
      </section> 

      {/* Second Card */}
      <section className="w-full min-h-[603px] bg-[#FAFAFA] text-[#FFFFFF]"> 
        <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row-reverse lg:flex-row-reverse items-center gap-10"> 
          {/* Text Section */}
          <div className="flex flex-col justify-center items-start lg:w-1/2 md:w-1/2 w-full text-[#2A254B]"> 
            <h2 className="text-2xl sm:text-3xl font-normal leading-snug mb-6"> 
              Our service isn&apos;t just personal; it&apos;s actually hyper personally exquisite 
            </h2> 
            <p className="text-[16px] font-[400] sm:text-lg leading-relaxed mb-4"> 
              When we started Avion the idea was simple: Make high-quality 
              furniture affordable and available for the mass market 
            </p> 
            <p className="text-[16px] font-[400] sm:text-lg leading-relaxed mb-4"> 
              Handmade and lovingly crafted furniture and homeware is what we 
              live, breathe, and design so our Chelsea boutique became the 
              hotbed for the London interior design community 
            </p> 
            <button className="p-4 w-[170px] h-[56px] text-[#2A254B] mt-2 bg-gray-200 border-0 focus:outline-none hover:bg-black hover:text-white text-lg"> 
              Get in touch 
            </button> 
          </div> 

          {/* Image Section */}
          <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center items-center"> 
            <Image 
              className="object-cover rounded-lg max-w-full h-auto" 
              alt="hero" 
              src="/blacksofa.png" // Make sure the image is in the public folder 
              width={500} // Specify width 
              height={300} // Specify height 
            /> 
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
          <div className="text-center flex flex-col items-center bg-white p-4 hover:bg-gray-200 transition-all duration-300 ease-in-out"> 
            <TbTruckDelivery className="text-4xl text-[#2A254B]" /> 
            <h4 className="mt-3 font-[400] text-lg mb-2 text-[#2A254B]"> 
              Next day as standard 
            </h4> 
            <p className="text-center"> 
              Order before 3pm and get your order the next day as standard 
            </p> 
          </div> 

          {/* Second Grid Item */}
          <div className="text-center flex flex-col items-center bg-white p-4 hover:bg-gray-200 transition-all duration-300 ease-in-out"> 
            <IoMdCheckmark className="text-4xl text-[#2A254B]" /> 
            <h4 className="mt-3 font-[400] text-lg mb-2">Made by true artisans</h4> 
            <p className="text-center"> 
              Handmade crafted goods made with real passion and craftsmanship 
            </p> 
          </div> 

          {/* Third Grid Item */}
          <div className="text-center flex flex-col items-center bg-white p-4 hover:bg-gray-200 transition-all duration-300 ease-in-out"> 
            <GoCreditCard className="text-4xl text-[#2A254B]" /> 
            <h4 className="mt-3 font-[400] text-lg mb-2">Unbeatable prices</h4> 
            <p className="text-center"> 
              For our materials and quality, you won&apos;t find better prices anywhere 
            </p> 
          </div> 

          {/* Fourth Grid Item */}
          <div className="text-center flex flex-col items-center bg-white p-4 hover:bg-gray-200 transition-all duration-300 ease-in-out"> 
            <LuSprout className="text-4xl text-[#2A254B]" /> 
            <h4 className="mt-3 font-[400] text-lg mb-2">Recycled packaging</h4> 
            <p className="text-center"> 
              We ensure minimal environmental impact 
            </p> 
          </div> 
        </div> 

        {/* Button */}
        <div className="flex justify-center mt-8"> 
          <button className="p-4 w-[170px] h-[56px] text-[#2A254B] bg-gray-200 border-0 focus:outline-none hover:bg-black hover:text-white text-lg"> 
            View collection 
          </button> 
        </div> 
      </div> 

      {/* Signup Section */}
      <section 
  className="relative bg-cover bg-center w-full h-[481px] sm:h-[550px]" 
  style={{ 
    backgroundImage: "url('bg1.jpg')", 
    backgroundSize: "cover", // Image container ke andar fit karne ke liye
    backgroundPosition: "center", // Image ko center align karne ke liye
    backgroundRepeat: "no-repeat" // Repeat ko disable karne ke liye
  }} 
> 
  <div className="absolute inset-0 bg-black opacity-50"></div> 
  <div className="container mx-auto px-4 py-24 flex justify-center items-center"> 
    <div className="text-center text-white"> 
      <h2 className="text-3xl sm:text-4xl font-normal leading-snug mb-6"> 
        Stay updated on new offers 
      </h2> 
      <p className="text-lg mb-6"> 
        Subscribe to our newsletter for the latest updates 
      </p> 

      {/* Form Layout */}
      <div className="flex flex-col gap-4 justify-center items-center md:flex-row">
        <input 
          type="text" 
          placeholder="Your email" 
          className="p-4 w-full max-w-[350px] text-[#2A254B] bg-[#F9F9F9] border border-[#CCCCCC] rounded-lg" 
        /> 
        <button 
          className="p-4 w-full max-w-[170px] text-[#2A254B] bg-gray-200 hover:bg-black hover:text-white text-lg rounded-lg"
        > 
          Subscribe 
        </button> 
      </div>
    </div> 
  </div> 
</section>

    </div> 
  ); 
};

export default About;

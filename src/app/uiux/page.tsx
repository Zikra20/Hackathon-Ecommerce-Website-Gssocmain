"use client";

import Image from "next/image"; // Importing Next.js Image component

const EcommerceUI = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-indigo-400 font-semibold text-xl">JUST UX</h1>
        <h2 className="text-4xl font-bold mt-4">ecommerce</h2>
        <h2 className="text-4xl font-bold">user interface kit</h2>
        <h2 className="text-4xl font-bold">Syeda Uzma Ahmed (Roll No # 0044862)</h2>
      </header>

      {/* Product Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Product 1 */}
          <div className="text-left hover:scale-105 transform transition-all duration-300">
            <Image
              src="/chair.png"
              alt="The Dandy Chair"
              width={500}
              height={500}
              className="w-full h-80 object-cover rounded-lg"
            />
            <h3 className="text-lg mt-4">The Dandy Chair</h3>
            <p className="text-gray-400">£250</p>
          </div>

          {/* Product 2 */}
          <div className="text-left hover:scale-105 transform transition-all duration-300">
            <Image
              src="/lamp.png"
              alt="New Lamp"
              width={500}
              height={500}
              className="w-full h-80 object-cover rounded-lg"
            />
            <h3 className="text-lg mt-4">New Lamp</h3>
            <p className="text-gray-400">£350</p>
          </div>

          {/* Product 3 */}
          <div className="text-left hover:scale-105 transform transition-all duration-300">
            <Image
              src="/table.png"
              alt="The Stanley Table"
              width={500}
              height={500}
              className="w-full h-80 object-cover rounded-lg"
            />
            <h3 className="text-lg mt-4">The Stanley Table</h3>
            <p className="text-gray-400">£125</p>
          </div>

          {/* Product 4 */}
          <div className="text-left hover:scale-105 transform transition-all duration-300">
            <Image
              src="/stool.png"
              alt="Stool"
              width={500}
              height={500}
              className="w-full h-80 object-cover rounded-lg"
            />
            <h3 className="text-lg mt-4">Stool</h3>
            <p className="text-gray-400">£250</p>
          </div>

          {/* Product 5 */}
          <div className="text-left hover:scale-105 transform transition-all duration-300">
            <Image
              src="/vase.png"
              alt="Andel Vase"
              width={500}
              height={500}
              className="w-full h-80 object-cover rounded-lg"
            />
            <h3 className="text-lg mt-4">Andel Vase</h3>
            <p className="text-gray-400">£95</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceUI;

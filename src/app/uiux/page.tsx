"use client";

import Image from "next/image"; // Importing Next.js Image component
import { products, Product } from "./products";

// Product card component
const ProductCard = ({ product }: { product: Product }) => (
  <div className="text-left hover:scale-105 transform transition-all duration-300">
    <Image
      src={product.image}
      alt={product.alt}
      width={500}
      height={500}
      className="w-full h-80 object-cover rounded-lg"
    />
    <h3 className="text-lg mt-4">{product.name}</h3>
    <p className="text-gray-400">{product.price}</p>
  </div>
);

const EcommerceUI = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-indigo-400 font-semibold text-xl">JUST UX</h1>
        <h2 className="text-4xl font-bold mt-4">ecommerce</h2>
        <h2 className="text-4xl font-bold">user interface kit</h2>
        <h2 className="text-4xl font-bold">Maham Babar</h2>
      </header>

      {/* Product Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EcommerceUI;
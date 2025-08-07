import React from 'react'
import Image from 'next/image'

const ProductListing = () => {
  return (
    <div className='w-full h-auto text-[#2A254B] dark:text-pink-100 bg-[#FAFAFA] dark:bg-[#2A1E2F] mt-11 transition-all duration-300'>
      
      {/* Banner */}
      <div className="w-full h-[260px] shadow-lg bg-[#FAFAFA] dark:bg-[#3B2B3D] transition-all duration-300">
        <Image
          src="/frame.png"
          alt="Chair"
          layout="responsive"
          width={1910}
          height={260}
          className="object-cover mb-4 ml-4 sm:ml-0 md:ml-0"
        />
      </div>   

      {/* Product list section */}
      <section className="py-16 bg-[#FAFAFA] dark:bg-[#2A1E2F] transition-all duration-300">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-normal text-left text-[#2A254B] dark:text-pink-100 mb-10">Our Products</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { imgSrc: '/chair.png', name: 'The Dandy Chair', price: '£250' },
              { imgSrc: '/vase.png', name: 'The Lucky Lamp', price: '£399' },
              { imgSrc: '/botal.png', name: 'Rustic Vase Set', price: '£155' },
              { imgSrc: '/lamp.png', name: 'The Stanley Table', price: '£125' },
              { imgSrc: '/glamp.jpg', name: 'The Dandy Chair', price: '£250' },
              { imgSrc: '/cup.png', name: 'The Lucky Lamp', price: '£399' },
              { imgSrc: '/stool.png', name: 'Rustic Vase Set', price: '£155' },
              { imgSrc: '/yphoto.png', name: 'The Stanley Table', price: '£125' },
              { imgSrc: '/chair.png', name: 'The Dandy Chair', price: '£250' },
              { imgSrc: '/vase.png', name: 'The Lucky Lamp', price: '£399' },
              { imgSrc: '/botal.png', name: 'Rustic Vase Set', price: '£155' },
              { imgSrc: '/lamp.png', name: 'The Stanley Table', price: '£125' },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-[#FAFAFA] dark:bg-[#3B2B3D] shadow-lg rounded-lg mb-8 transition-all duration-300"
              >
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  width={500}
                  height={256}
                  className="w-full h-64 object-cover mb-4 rounded-t-lg"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-[#2A254B] dark:text-pink-100">{product.name}</h4>
                  <p className="text-[#2A254B] dark:text-pink-200">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View Collection Button */}
          <div className="text-center mt-8">
            <button className="p-4 w-[170px] h-[56px] text-[#2A254B] dark:text-pink-100 bg-gray-200 dark:bg-pink-900 border-0 rounded-lg hover:bg-black hover:text-white dark:hover:bg-pink-700 dark:hover:text-white text-lg transition-colors duration-300">
              View Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductListing;

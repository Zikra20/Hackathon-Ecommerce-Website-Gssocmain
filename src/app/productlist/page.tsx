import React from 'react'
import Image from 'next/image'; // Import Next.js Image component

const ProductListing = () => {
  return (
    <div className='w-full h-auto text-[#FFFFFF] bg-[#FAFAFA] mt-11'>
     <div className="bg-[#FAFAFA] w-full h-[260px] shadow-lg ">
        <Image
          src="/frame.png"
          alt="Chair"
          layout="responsive" // Ensures the image is responsive
          width={1910} // Set a large width for responsive image handling
          height={260} // Keep the height as per the original ratio
          className="object-cover mb-4 ml-4 sm:ml-0 md:ml-0  "
        />
      </div>   
      
      {/* Product list section */}
      <div className='w-full text-[#FFFFFF] bg-[#FAFAFA]'>
        <section className="py-16 bg-[#FAFAFA]">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-normal text-left text-[#2A254B] mb-10">Our Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              
              {/* Product Cards */}
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
                <div key={index} className="bg-[#FAFAFA] shadow-lg rounded-lg mb-8">
                  <Image
                    src={product.imgSrc}
                    alt={product.name}
                    width={500} // Adjust width
                    height={256} // Adjust height
                    className="w-full h-64 object-cover mb-4 rounded-t-lg"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-[#2A254B]">{product.name}</h4>
                    <p className="text-[#2A254B]">{product.price}</p>
                  </div>
                </div>
              ))}

            </div>

            {/* View Collection Button */}
            <div className="text-center mt-8">
              <button className="p-4 w-[170px] h-[56px] text-[#2A254B] bg-gray-200 border-0 rounded-lg hover:bg-black hover:text-white text-lg">
                View Collection
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductListing;

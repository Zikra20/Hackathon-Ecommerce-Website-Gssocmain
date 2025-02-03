import Image from "next/image";

export default function ShoppingCart() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6">Your shopping cart</h1>
      <div className="space-y-6">
        {/* Shopping Cart Item 1 */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center">
            <Image
              src="/vaseleave.png" // Replace with actual image path
              alt="Graystone Vase"
              width={100}
              height={100}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Graystone vase</h2>
              <p className="text-sm text-gray-500">
                A timeless ceramic vase with a tri color grey glaze.
              </p>
              <p className="text-sm font-bold mt-1">£85</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="border px-2 py-1 text-gray-500 hover:text-gray-700">-</button>
            <span>1</span>
            <button className="border px-2 py-1 text-gray-500 hover:text-gray-700">+</button>
          </div>
          <p className="font-bold">£85</p>
        </div>

        {/* Shopping Cart Item 2 */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center">
            <Image
              src="/leave.png" 
              alt="Basic White Vase"
              width={100}
              height={100}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Basic white vase</h2>
              <p className="text-sm text-gray-500">
                Beautiful and simple&apo;, this one is for the classics.
              </p>
              <p className="text-sm font-bold mt-1">£125</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="border px-2 py-1 text-gray-500 hover:text-gray-700">-</button>
            <span>1</span>
            <button className="border px-2 py-1 text-gray-500 hover:text-gray-700">+</button>
          </div>
          <p className="font-bold">£125</p>
        </div>
      </div>

      {/* Subtotal */}
      <div className="mt-6 flex justify-end">
        <div>
          <p className="text-lg font-semibold">
            Subtotal: <span className="font-bold">£210</span>
          </p>
          <p className="text-sm text-gray-500 lg:pr-16">
            Taxes and shipping are calculated at checkout.
          </p>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 flex justify-end">
        <button
          id="bg"
          className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
        >
          Go to checkout
        </button>
      </div>
    </div>
  );
}

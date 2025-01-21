// components/Cart.tsx

import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <div className="flex justify-between p-6 space-x-6">
      
      {/* Left Side - Order Summary */}
      <div className="flex-1 pr-6">
        <div className="text-xl font-semibold mb-2">
          Order Summary
        </div>
        
        <div className="border-b border-gray-300 mb-4"></div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <h3 className="font-medium">Sub Total</h3>
            <p>₹12,900</p>
          </div>
          
          <div className="flex justify-between">
            <h3 className="font-medium">Delivery Total</h3>
            <p>₹0</p>
          </div>

          <div className="flex justify-between">
            <h3 className="font-medium">Service Total</h3>
            <p>₹12,900</p>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-6">
          <button className="w-full py-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Right Side - Product Image and Delete Button */}
      <div className="text-center">
        <Image src={'/p5.png'} alt="Product Image" width={100} height={100} className="mx-auto" />
        <div className="mt-4">
          <button className="px-4 py-2 bg-red-600 text-white rounded-md cursor-pointer hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart

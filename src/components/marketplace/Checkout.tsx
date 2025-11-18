import React from "react";

interface CheckoutProps {
  totalPrice: number;
  quantity: number;
}

const Checkout: React.FC<CheckoutProps> = ({ totalPrice, quantity }) => {
  return (
    <div className="checkout p-4 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">Checkout Summary</h2>
      <div className="flex justify-between mb-1">
        <span>Total Items:</span>
        <span>{quantity}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Total Price:</span>
        <span>Rs. {totalPrice.toFixed(2)}</span>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Proceed to Payment
      </button>
    </div>
  );
};

export default Checkout;

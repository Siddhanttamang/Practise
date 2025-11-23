import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
interface AddToCartProps {
  isAddedToCart: boolean;
  onAddToCart: () => void;
}
const AddToCart: React.FC<AddToCartProps> = ({ isAddedToCart, onAddToCart }) => {
  return (
    <button className={`px-4 py-2 rounded-xl bg-green-400 cursor-pointer font-bold text-white ${(isAddedToCart)?"bg-green-800":""}`} onClick={onAddToCart}>
      <FaShoppingCart size={24} />
    </button>
  );
};

export default AddToCart

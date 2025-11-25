import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
interface AddToCartProps {
  isAddedToCart: boolean;
  onAddToCart: () => void;
  onRemoveFromCart:()=>void;
}
const AddToCart: React.FC<AddToCartProps> = ({ isAddedToCart, onAddToCart,onRemoveFromCart }) => {
  return (
    <>
    {(!isAddedToCart?(
      <button className="px-4 py-2 rounded-xl bg-green-400 cursor-pointer font-bold text-white " onClick={onAddToCart}>
      <FaShoppingCart size={24} />
    </button>
    ):(<button>
      <button className="px-4 py-2 rounded-xl bg-red-600 cursor-pointer font-bold text-white " onClick={onRemoveFromCart}>
      <FaShoppingCart size={24} />
    </button>

    </button>

    ))}

      
    
    </>
  );
};

export default AddToCart

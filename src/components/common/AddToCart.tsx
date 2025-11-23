import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
interface AddToCartProps {
  isAddedToCart: boolean;
  onAddToCart: () => void;
}
const AddToCart: React.FC<AddToCartProps> = ({ isAddedToCart, onAddToCart }) => {
  return (
    <button className="contact-btn" onClick={onAddToCart}>

      {(isAddedToCart ? "Added" : "Add to Cart")}<FaShoppingCart className=" pl-2 inline-block" size={24} />
       
    </button>
  );
};

export default AddToCart

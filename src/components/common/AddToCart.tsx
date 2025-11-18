import React, { useState } from 'react'
interface AddToCartProps {
  isAddedToCart: boolean;
  onAddToCart: () => void;
}
const AddToCart: React.FC<AddToCartProps> = ({ isAddedToCart, onAddToCart }) => {
  return (
    <button className="contact-btn" onClick={onAddToCart}>
      {isAddedToCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddToCart

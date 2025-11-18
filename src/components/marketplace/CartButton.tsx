// CartButton.tsx
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

interface CartButtonProps {
  count: number;
}

const CartButton: React.FC<CartButtonProps> = ({ count }) => {
  return (
    <button className="relative p-2 text-white bg-blue-500 rounded-full">
      <FaShoppingCart size={24} />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </button>
  );
};

export default CartButton;

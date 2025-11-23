import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { ProductResponse } from "../../services/api";
import AddToCart from "../common/AddToCart";

interface ProductCardProps {
  product: ProductResponse;
  isAddedToCart: boolean;
  onAddToCart: (qty: number) => void;
  initialQuantity?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isAddedToCart,
  onAddToCart,
  initialQuantity = 1,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const handleQuantityChange = (delta: number) => {
    const newQty = Math.max(1, quantity + delta);
    setQuantity(newQty);
    onAddToCart(newQty);
  };

  const handleProduct = () => {
    navigate(`/marketplace/product/${product.id}`);
  };

  const CartProduct = location.pathname.startsWith("/marketplace/cart");

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg w-96 sm:w-96">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={handleProduct}
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>

        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Quantity: {product.quantity} kg</span>
          <span className="font-bold text-green-600">Rs. {product.price}</span>
        </div>

        <div className="text-xs text-gray-400 mb-3">Listed on: {product.created_at}</div>

        <div className="flex items-center gap-2 mb-3">
          <span className="font-medium text-gray-700">Quantity</span>
          <button
            onClick={() => handleQuantityChange(-1)}
            className="bg-gray-300 px-2 rounded"
          >
            -
          </button>
          <input
            type="number"
            className="w-12 text-center border border-gray-300 rounded"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value) || 1)}
          />
          <button
            onClick={() => handleQuantityChange(1)}
            className="bg-gray-300 px-2 rounded"
          >
            +
          </button>
        </div>

        {!CartProduct && (
          <AddToCart
            isAddedToCart={isAddedToCart}
            onAddToCart={() => onAddToCart(quantity)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;

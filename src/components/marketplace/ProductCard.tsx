import React, { useEffect, useState } from 'react'
import { type ProductResponse } from '../../services/api';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import AddToCart from '../common/AddToCart';

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
  const location=useLocation();
  const navigate=useNavigate();
  const[quantity,setQuantity]=useState<number>(initialQuantity);
  const handleQuantityChange = (delta: number) => {
    const newQty = Math.max(1, quantity + delta);
    setQuantity(newQty);
    onAddToCart(newQty); 
  };
  const handleProduct=()=>{
    navigate(`/marketplace/product/${product.id}`);

  }
   const CartProduct = location.pathname.startsWith("/marketplace/cart");

  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} className="product-image" onClick={handleProduct}/>
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>

        <div className="product-info">
          <span>Quantity: {product.quantity} kg</span>
          <span className="product-price">Rs. {product.price}</span>
        </div>

        <div className="product-date">Listed on: {product.created_at}</div>
         <div className="flex items-center gap-2 my-2">
            <span><strong>Quantity</strong></span>
            <button onClick={() => handleQuantityChange(-1)} className="bg-slate-300 px-2">-</button>
            <input type="number" className="w-12 text-center" value={quantity} onChange={e => setQuantity(Number(e.target.value) || 1)} />
            <button onClick={() => handleQuantityChange(1)} className="bg-slate-300 px-2">+</button>
          </div>
          {!CartProduct &&
          (<AddToCart
          isAddedToCart={isAddedToCart}
          onAddToCart={() => onAddToCart(quantity)}
        />)}
        


      </div>
    </div>
  );
};

export default ProductCard;

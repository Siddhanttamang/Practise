import React from 'react'
import { ProductResponse } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: ProductResponse;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate=useNavigate();
  const handleProduct=()=>{

  }
  return (
    <div className="product-card" onClick={handleProduct}>
      <img src={product.image_url} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>

        <div className="product-info">
          <span>Quantity: {product.quantity} kg</span>
          <span className="product-price">Rs. {product.price}</span>
        </div>

        <div className="product-date">Listed on: {product.created_at}</div>

        <div className="seller-info">
          <h3>Seller Info</h3>
          <p>Name: {product.user_name}</p>
          <p>Address: {product.user_address}</p>
          <p>Contact: {product.user_contact}</p>
        </div>

        <button className="contact-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

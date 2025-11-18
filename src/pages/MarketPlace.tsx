import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchProduct, type ProductResponse } from '../services/auth';
import "../styles/marketplace.css";
import CartButton from '../components/marketplace/CartButton';

export interface CartItem {
  id: number;
  quantity: number;
  price:number;
}

const MarketPlace: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [productdata, setProductData] = useState<ProductResponse| null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (id: number, quantity: number,price:number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        // Update quantity
        return prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
      } else {
        // Add new item
        return [...prev, { id, quantity,price }];
      }
    });
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await fetchProduct();
        if (data) {
          setProductData(data);
          setError('');
        }
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchProductData();
  }, []);

  return (
    <div className='market-place'>
      <nav className='nav-market pb-4'>
        <Link to="/marketplace" className='nav-link'><h2>Products</h2></Link> 
        <Link to="/marketplace/cart" className='nav-link'><CartButton count={cartItems.length}/></Link>
      </nav>
      <Outlet context={{ productdata, handleAddToCart, cartItems }} />
    </div>
  );
};

export default MarketPlace;

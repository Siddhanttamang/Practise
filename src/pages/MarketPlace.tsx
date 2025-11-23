import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchProduct, type ProductResponse } from '../services/api';
import "../styles/marketplace.css";

import { AuthContext } from '../contexts/AuthContext';
import SearchBar from '../components/marketplace/SearchBar';
import CartButton from '../components/marketplace/CartButton';

export interface CartItem {
  id: number;
  quantity: number;
  price: number;
}

const MarketPlace: React.FC = () => {
  const [error, setError] = useState<string>('');
  const auth= useContext(AuthContext);
  const [allProducts, setAllProducts] = useState<ProductResponse[] | null>(null);
  const [productdata, setProductData] = useState<ProductResponse[] | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (id: number, quantity: number, price: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        // Update quantity
        return prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
      } else {
        // Add new item
        return [...prev, { id, quantity, price }];
      }
    });
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await fetchProduct();
        if (res) {
          setAllProducts(res);     // store original
          setProductData(res);     // initial UI list
          setError('');
        }
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchProductData();
  }, [setAllProducts,allProducts]);

  return (
    <div className='market-place flex flex-col gap-6'>
      <SearchBar allProducts={allProducts} setProductData={setProductData} />

      <nav className='nav-market'>
        <div>

        {(auth?.isLoggedIn) &&
          <Link to="/marketplace/addVegetable" className='nav-link'>
              <button className='login-button w-full p-2 pb-7 text-center'>Add Vegetables</button>
          </Link>
        }
        </div>
      
        <Link to="/marketplace/cart" className='nav-link'>
          <CartButton count={cartItems.length}/>
        </Link>
      </nav>

      <Outlet 
        context={{ productdata, setProductData, handleAddToCart, cartItems }} 
      />
    </div>
  );
};

export default MarketPlace;

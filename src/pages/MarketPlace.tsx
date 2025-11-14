import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Products from '../components/marketplace/ProductList'
import { fetchProduct, ProductResponse } from '../services/auth'
import "../styles/marketplace.css"
const MarketPlace = () => {
  const[error,setError]=useState<string>("");
  const[productdata,setProductData]=useState<ProductResponse |null>(null);
  useEffect(()=>{
      const fetchProductData=async ()=>{
              try{
                  const data= await fetchProduct();
                  if(data){
                      setProductData(data);
                      setError("");
                  }
              }catch(err:any){
                  setError(err.message);
              }
          }
          fetchProductData();
  
      },[]);
  

  return (
    <div className='market-place'>
        <nav className='nav-market'>
        <Link to="products" className='nav-link'><h2>Products</h2></Link> 
        <Link to="cart" className='nav-link'><h2>Cart</h2></Link>
      </nav>
      <Outlet context={{ productdata }} />
    </div>
  )
}

export default MarketPlace

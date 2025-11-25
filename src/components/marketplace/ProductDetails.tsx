import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';

import axios from 'axios';
import type { ProductResponse } from '../../services/api';
import AddToCart from '../common/AddToCart';


interface MarketPlaceContext {
  cartItems: { id: number; quantity: number }[];
  handleAddToCart: (id: number, quantity: number) => void;
  handleRemoveFromCart:(id:number)=>void;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartItems, handleAddToCart,handleRemoveFromCart } = useOutletContext<MarketPlaceContext>();

  const [product, setProduct] = useState<ProductResponse | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('Invalid product ID');
      setLoading(false);
      return;
    }
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/vegetables/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const goBack = () => navigate(-1);

  if (loading) return <div>Loading product...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No product found.</div>;

  const isAddedToCart = cartItems.some(item => item.id === product.id);
  const onAddToCart = () => handleAddToCart(product.id, quantity);
  const onRemoveFromCart=()=>handleRemoveFromCart(product.id);

  return (
    <div className="flex flex-col items-center p-6">
      <button onClick={goBack} className="self-start mb-4 px-4 py-2 bg-gray-200 rounded-lg">← Back</button>
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl flex flex-col md:flex-row gap-4">
        <img src={product.image_url} alt={product.name} className="w-full md:w-1/2 rounded-lg object-cover h-80" />
        <div className="flex flex-col gap-2 md:w-1/2">
        <div className='flex justify-between'>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <span className='text-gray-500 text-xs'> {product.created_at}</span>
        </div>
          
          <p><strong>Name:</strong> {product.user_name}</p>
          <p><strong>Contact:</strong> {product.user_contact}</p>
          <p><strong>Address:</strong>{product.user_address}</p>
          <div className='flex justify-between'>
          <p className="text-green-600 font-bold text-2xl"> Rs. {product.price}</p>
          <div>{(product.quantity)?<p>In Stock</p>:<p>Out of Stock</p>}</div>
          </div>

    


          
          <div className="flex items-center gap-2 mt-2">
            <button onClick={() => setQuantity(prev => Math.max(prev - 1, 1))} className="bg-slate-300 px-2">-</button>
            <input type="number" className="w-full text-center bg-gray-300" value={quantity} onChange={e => setQuantity(Number(e.target.value) || 1)} />
            <button onClick={()=>setQuantity(prev=>prev+1)} className="bg-slate-300 px-2">+</button>

          
          <AddToCart isAddedToCart={isAddedToCart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

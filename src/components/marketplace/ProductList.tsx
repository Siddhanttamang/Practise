import React from "react";
import { useOutletContext } from "react-router-dom";


import ProductCard from "./ProductCard";
import type { ProductResponse } from "../../services/api";
import type { CartItem } from "../../pages/MarketPlace";


interface MarketPlaceContext {
  productdata: ProductResponse[] | null;
  cartItems: CartItem[];
  handleAddToCart: (id: number,quantity:number,price:number) => void;
}


const Products: React.FC = () => {
  const { productdata, cartItems, handleAddToCart} = useOutletContext<MarketPlaceContext>();
  if (!productdata || productdata.length === 0)
    return <div>Loading products...</div>;

  return (
    <div className="product-list ">
      {productdata.map(product => {
        const cartItem = cartItems.find(ci => ci.id === product.id);

        return (
         <ProductCard
          key={product.id}
          product={product}
          isAddedToCart={!!cartItem}
          onAddToCart={(quantity) => handleAddToCart(product.id, quantity,product.price)}
        />

        );
      })}
    </div>
  );
};

export default Products;

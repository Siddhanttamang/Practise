import React from "react";
import { useOutletContext } from "react-router-dom";
import { type ProductResponse } from "../../services/api";

import type { CartItem } from "../../pages/MarketPlace";
import ProductCard from "./ProductCard";
import Checkout from "./Checkout";
interface MarketPlaceContext {
  productdata: ProductResponse[] | null;
  cartItems: CartItem[];
  handleAddToCart: (id: number, quantity: number, price: number) => void;
  handleRemoveFromCart:(id:number)=>void;
}

const Cart: React.FC = () => {
  const { productdata, cartItems, handleAddToCart,handleRemoveFromCart } =useOutletContext<MarketPlaceContext>();

  if (!productdata || productdata.length === 0)
    return <div>Loading products...</div>;

  // Map cart items to their products and calculate total price per item
  const selectedProducts = cartItems
    .map((ci) => {
      const product = productdata.find((p) => p.id === ci.id);
      if (!product) return null;
      return {
        product,
        cartQuantity: ci.quantity,
        totalPrice: ci.quantity * product.price,
      };
    })
    .filter(Boolean) as {
    product: ProductResponse;
    cartQuantity: number;
    totalPrice: number;
  }[];


  const grandTotal = selectedProducts.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );

  return (
    <div className=" flex flex-row justify-evenly">
      <div className="product-list w-2/4 ">
        {selectedProducts.map(({ product, cartQuantity }) => (
          <ProductCard
            key={product.id}
            product={product}
            isAddedToCart={true}
            onAddToCart={(qty) =>
              handleAddToCart(product.id, qty, product.price)
            }
            onRemoveFromCart={()=>
              handleRemoveFromCart(product.id)
            }
            initialQuantity={cartQuantity}
          />
        ))}
      </div>
      <div className="w-2/4">
        {selectedProducts.length > 0 && (
          <Checkout
            totalPrice={grandTotal}
            products={selectedProducts.map((item) => ({
              id: item.product.id,
              name: item.product.name,
              quantity: item.cartQuantity,
            }))}
            quantity={selectedProducts.reduce(
              (sum, item) => sum + item.cartQuantity,
              0
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;

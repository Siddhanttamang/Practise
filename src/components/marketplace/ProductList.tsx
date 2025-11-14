import React from "react";
import { useOutletContext } from "react-router-dom";

import { ProductResponse } from "../../services/auth";
import ProductCard from "./ProductCard";

interface MarketPlaceContext {
  productdata: ProductResponse[] | null;
  isListed?:boolean;
}

const Products: React.FC = () => {
  const { productdata } = useOutletContext<MarketPlaceContext>();
  if (!productdata || productdata.length === 0)
    return <div>Loading products...</div>;

  return (
    <div className="product-list">
      {productdata.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default Products;

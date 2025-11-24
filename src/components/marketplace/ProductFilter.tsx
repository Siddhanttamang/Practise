import React, { useState, useEffect } from "react";
import type { ProductResponse } from "../../services/api";

interface ProductFilterProps {
  allProducts: ProductResponse[] |null; 
  setProductData: React.Dispatch<React.SetStateAction<ProductResponse[] | null>>;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ allProducts, setProductData }) => {
  const [sortOrder, setSortOrder] = useState<string>("");

  useEffect(() => {
    if (!allProducts) return;

    let sortedProducts = [...allProducts];

    if (sortOrder === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProductData(sortedProducts);
  }, [sortOrder, allProducts, setProductData]);

  return (
    <div>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default ProductFilter;

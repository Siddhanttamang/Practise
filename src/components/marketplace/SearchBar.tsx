import React, { useEffect, useState } from 'react';
import type { ProductResponse } from '../../services/api';


interface SearchBarProps {
  allProducts: ProductResponse[] | null;
  setProductData: React.Dispatch<React.SetStateAction<ProductResponse[] | null>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ allProducts, setProductData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!allProducts) return;

    const query = searchQuery.trim().toLowerCase();

    if (query === "") {
      setProductData(allProducts); 
      return;
    }

    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query)
    );

    setProductData(filtered);
  }, [searchQuery,allProducts]);

  return (
    <div className="flex flex-row gap-2 w-full">
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 border border-gray-500 text-gray-700 w-full
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
'use client'
import React, { useState } from "react";
import SearchBar from "../components/searchBar/page";
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
}

const products: Product[] = [
  { id: 1, name: "Perfume", category: "Fragrance", price: 1200, description: "A delightful fragrance." },
  { id: 2, name: "Scented Candle", category: "Home", price: 800, description: "Aromatic candles for ambiance." },
  { id: 3, name: "Body Lotion", category: "Skincare", price: 600, description: "Smooth and moisturizing lotion." },
  { id: 4, name: "Hand Cream", category: "Skincare", price: 400, description: "Soft and nourishing cream." },
];

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Filter products based on the search term
  const filterProducts = (term: string) => {
    if (!term) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.category.toLowerCase().includes(term.toLowerCase()) ||
      product.description.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Product Search</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(term: string) => {
          setSearchTerm(term);
          filterProducts(term);
        }}
      />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-sm text-gray-600">${product.price}</p>
            <p className="mt-2 text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-6">No products found.</p>
      )}
    </div>
  );
};

export default SearchPage;

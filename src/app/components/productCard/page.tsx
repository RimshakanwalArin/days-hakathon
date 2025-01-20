import React from "react";
import { Product } from "@/type/product"; 

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-600 mt-2">Category: {product.category}</p>
      <p className="text-gray-600">Price: ${product.price}</p>
      <p className="text-gray-500 mt-2">{product.description}</p>
    </div>
  );
};

export default ProductCard;

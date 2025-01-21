// pages/products.tsx
'use client'
import React, { useEffect, useState } from 'react';
import {client} from '@/sanity/lib/client'
import Image from 'next/image';

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch products from Sanity
  const fetchProducts = async () => {
    const query = `
      *[_type == "products"] | order(price desc) [0...10]{
        _id,
        title,
        price,
        "imageUrl": image.asset->url,
        description
      }
    `;
    
    try {
      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Top Products</h1>
      
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-lg">
              <Image
              width={400}
              height={300} src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-500 mb-2">{product.description}</p>
              <p className="text-lg font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;

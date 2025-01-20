import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import BestSellingCard from '../bestSellingCard/page';

const BestSelling = () => {
  const bestSell = [
    {
      src: '/p7.png',
      alt: 'white',
      title: 'White Perfume',
      descr: 'Best perfume',
      price: 1200,
      category: 'Top',
      slug: 'black',
    },
    {
      src: '/p4.png',
      alt: 'white',
      title: 'White Perfume',
      descr: 'Best perfume',
      price: 1200,
      category: 'Top',
      slug: 'black',
    },
    {
      src: '/p5.png',
      alt: 'white',
      title: 'White Perfume',
      descr: 'Best perfume',
      price: 1200,
      category: 'Top',
      slug: 'black',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Best Selling</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bestSell.map((item, i) => (
          <BestSellingCard
            key={i}
            src={item.src}
            alt={item.alt}
            title={item.title}
            descr={item.descr}
            price={item.price}
            category={item.category}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;

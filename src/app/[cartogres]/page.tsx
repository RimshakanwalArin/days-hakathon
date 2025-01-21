

import React from 'react';
import BestSellingCard from '../components/bestSellingCard/page';

const Cartegory = () => {
  const bestSell = [
    {
      src: '/p10.png',
      alt: 'white perfume',
      title: 'White Perfume',
      descr: 'Best perfume for all occasions',
      price: 1200,
      category: 'top',
      slug: 'white-perfume',
    },
    {
      src: '/p6.png',
      alt: 'black prfume',
      title: 'Black Perfume',
      descr: 'Elegant black fragrance',
      price: 1500,
      category: 'luxury',
      slug: 'black-perfume',
    },
    {
      src: '/p2.png',
      alt: 'blue perfume',
      title: 'Blue Perfume',
      descr: 'Refreshing and cool scent',
      price: 1000,
      category: 'casual',
      slug: 'blue-perfume',
    },
  ];

  return (
    <div>
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

export default Cartegory;

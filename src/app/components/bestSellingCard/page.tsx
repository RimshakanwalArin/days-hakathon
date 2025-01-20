import Link from 'next/link';
import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const BestSellingCard = ({
  src,
  alt,
  title,
  descr,
  price,
  category,
  slug,
}: {
  src: string;
  alt: string;
  title: string;
  descr: string;
  price: number;
  category: string;
  slug: string;
}) => {
  return (
    <div className="card glass w-96">
      {/* Link wraps the whole card for better usability */}
      <Link href={`/${category}/${slug}`}>
        <li>
          <figure>
            <img src={src} alt={alt} className="w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{descr}</p>
            <p className="font-bold text-lg">${price.toFixed(2)}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary flex items-center gap-2">
                <FaCartShopping /> Add To Cart
              </button>
            </div>
          </div>
        </li>
      </Link>
    </div>
  );
};

export default BestSellingCard;

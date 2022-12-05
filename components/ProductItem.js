/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }) {
  return (
    <div className="card mt-5">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow w-[350px] h-[300px] object-cover mx-auto"
        />
      </Link>
      <div className="flex flex-col items-center p-[5px] justify-center ">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p>£{product.price}</p>
        <button className="primary-button hover:text-black" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

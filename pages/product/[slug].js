/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import { Store } from '../../utils/Store';

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);

  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3 mx-auto">
        <div className="md:col-span-2">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-[4px] max-w-[100%] min-h-[70%] mx-auto object-cover"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg pt-1 underline">{product.name}</h1>
            </li>
            <li className="pt-3">Category: {product.category}</li>
            <li>Description: {product.description}</li>
            <li>
              {product.rating} of {product.numReviews} reviews{' '}
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5 mt-3">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>£{product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>
                {product.countInStock > 0 ? 'Available' : 'Unavailable'}
              </div>
            </div>
            <button
              className="primary-button flex mx-auto"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

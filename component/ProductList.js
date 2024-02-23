'use client'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIds } from '../redux/action.js';
import { fetchProducts } from '../redux/action.js';

const ProductList = () => {
  const dispatch = useDispatch();
  const ids = useSelector(state => state.products.ids);
  const products = useSelector(state => state.products.products);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    dispatch(fetchIds({ offset: 10, limit: 3 }));
  }, [dispatch]);

  useEffect(() => {
    if (ids.length > 0) {
      dispatch(fetchProducts(ids));
    }
  }, [dispatch, ids]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Product List</h2>

      
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>Product: {product.product}</div>
            <div>Price: {product.price}</div>
            {/* Add other product details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

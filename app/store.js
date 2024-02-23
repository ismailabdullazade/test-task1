'use client'
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '/redux/productSlice.js';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});

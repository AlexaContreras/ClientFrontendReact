import React from 'react';
import styles from './Products.module.scss';
import { Product } from '../Product/Product';

export const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};


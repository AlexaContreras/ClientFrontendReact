import React from 'react';

import productImg from '../../assets/product.jpeg';
import styles from './Product.module.scss';

export const Product = () => {
  return (
    <div className={styles.link}>
      <div className={styles.image}>
        <img src={productImg} />
      </div>
      <div className={styles.info}>
        <p className={styles.price}>$ 9999</p>
        <p className={styles.title}>
        Limpiador Facial Para Cara Rostro Masajeador Recargable Usb
      </p>
      </div>
      <div className={styles.info}>
        <p className={styles.location}>Buenos aires</p>
      </div>

    </div>
  );
};

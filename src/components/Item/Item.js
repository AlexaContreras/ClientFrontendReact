import React, { useContext } from 'react';
import { AppContext } from '../../Context/Context';
import styles from './Item.module.scss';

export const Item = ({item: {id, title, location, price, picture, free_shipping}}) => {
  const [state, setState] = useContext(AppContext);

  let handleClick = () => {
    setState({...state, id})
  }

  return (
    <div className={styles.link} onClick={handleClick}>
      <div className={styles.image}>
        <img src={picture} />
      </div>
      <div className={styles.info}>
        <p className={styles.price}>{price.currency === "ARS" ? '$ ' : 'U$S '}{price.amount}</p>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.location}>{location}</p>
      </div>

    </div>
  );
};

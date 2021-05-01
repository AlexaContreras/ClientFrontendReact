import React, { useContext } from 'react';
import styles from './Items.module.scss';
import { Item } from '../Item/Item';
import { AppContext } from '../../Context/Context';

export const Items = () => {

  const [state] = useContext(AppContext);
  const { items } = state;
  let itemsToShow = null;

  if (items !== null) {
    itemsToShow = items.items;
  }


  return (
    <div className={styles.itemsContainer}>
      {itemsToShow !== null && itemsToShow.map(item => (
        < Item item={item}/>
      ))}
    </div>
  );
};


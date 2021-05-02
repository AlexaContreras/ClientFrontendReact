import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import styles from './Items.module.scss';
import Item from '../Item/Item';
import { AppContext } from '../../Context/Context';
import Category from '../Category/Category';
import Loader from './Loader';
import LoaderCategory from '../Category/LoaderCategory';

const Items = () => {
  const [state] = useContext(AppContext);
  const { items, query } = state;

  return (
    <>
      {items !== null ? (
        <>
          <Helmet>
            <title>{`${query} | Mercado Libre`}</title>
          </Helmet>
          <Category categories={items.categories} />
          <div className={styles.itemsContainer}>
            {items.items.map((item) => (
              <Item item={item} />
            ))}
          </div>
        </>
      ) : (
        <>
          <Helmet>
            <title>Cargando..</title>
          </Helmet>
          <div className={styles.itemsContainer}>
            <LoaderCategory />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </div>
        </>
      )}
    </>
  );
};

export default Items;

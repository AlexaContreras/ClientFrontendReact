import React, { useContext } from 'react';
// Helmet is used for SEO
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
      {/* Here we evaluate if we already have the items. */}
      {items !== null ? (
        <>
          {/* If we have them we evaluate if the query we have in our items is the same as the query set in our view*/}
          {query !== items.query ? (
            <>
              {/* If not, we set the loader until the information is updated. */}
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
          ) : (
            <>
              {/* If it is the same we show all the products we received form the API. */}
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
          )}
        </>
      ) : (
        <>
          {/* If the items are not yet available, we set the loader. */}
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

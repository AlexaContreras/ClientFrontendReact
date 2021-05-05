import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Helmet is used for SEO
import { Helmet } from 'react-helmet';
import { AppContext } from '../../Context/Context';
import Category from '../Category/Category';
import styles from './ItemDetail.module.scss';
import freeShipping from '../../assets/free-shipping.png';
import ItemDetailLoader from './ItemDetailLoader';
import LoaderCategory from '../Category/LoaderCategory';

const ItemDetail = () => {
  const [state, setState] = useContext(AppContext);
  const { detail } = state;

  const { id } = useParams();

  // The change of state is set with the parameter obtained from the url.
  useEffect(() => {
    setState({ ...state, id });
  }, [state.id]);

  return (
    <>
      {/* Here we evaluate if we already have the product detail. */}
      {detail != null ? (
        <>
          {/* If we have it we evaluate if the result we obtained corresponds to the parameter set in the url */}
          {detail.item.id !== id ? (
            <>
              {/* If not, we set the loader until the information is updated. */}
              <Helmet>
                <title>Cargando...</title>
              </Helmet>
              <div className={styles.loaderContainer}>
                <LoaderCategory />
                <ItemDetailLoader />
              </div>
            </>
          ) : (
            <>
              {/* If it corresponds to the parameter, we show all the required information for that product. */}
              <Helmet>
                <title>{`${detail.item.title} | Mercado Libre`}</title>
              </Helmet>
              <Category categories={detail.categories} />
              <div className={styles.itemDetailContainer}>
                <div className={styles.innerContainer}>
                  <div className={styles.image}>
                    <img src={detail.item.picture} alt='detalle del producto' />
                  </div>
                  <div className={styles.info}>
                    <p className={styles.condition}>
                      {detail.item.condition === 'new' ? 'Nuevo ' : 'Usado '}
                      {`${detail.item.sold_quantity} vendidos`}
                    </p>
                    <h2 className={styles.title}>{detail.item.title}</h2>
                    <div className={styles.price}>
                      {detail.item.price.currency === 'ARS' ? '$ ' : 'U$S '}
                      {detail.item.price.amount}{detail.item.price.decimals != '' ? `,${detail.item.price.decimals}` : ''}
                      {detail.item.free_shipping && (
                        <img src={freeShipping} alt='free shipping' />
                      )}
                    </div>
                    <button type='button'>Comprar</button>
                  </div>
                </div>
                <div className={styles.description}>
                  <h1>Descripción producto</h1>
                  <p>{detail.item.description == '' ? 'No tiene descripción para mostrar' : detail.item.description}</p>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {/* If the detail is not yet available, we set the loader. */}
          <Helmet>
            <title>Cargando...</title>
          </Helmet>
          <div className={styles.loaderContainer}>
            <LoaderCategory />
            <ItemDetailLoader />
          </div>
        </>
      )}
    </>
  );
};

export default ItemDetail;

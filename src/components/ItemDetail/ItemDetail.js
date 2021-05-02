import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  useEffect(() => {
    setState({ ...state, id });
  }, [state.id]);

  return (
    <>
      {detail != null ? (
        <>
          <Helmet>
            <title>{`${detail.item.title} | Mercado Libre`}</title>
          </Helmet>
          <Category categories={detail.categories} />
          <div className={styles.itemDetailContainer}>
            <div className={styles.innerContainer}>
              <div className={styles.image}>
                <img src={detail.item.picture} alt="detalle del producto" />
              </div>
              <div className={styles.info}>
                <p className={styles.condition}>
                  {detail.item.condition === 'new' ? 'Nuevo ' : 'Usado '}
                  -
                  {' '}
                  {detail.item.sold_quantity}
                  {' '}
                  vendidos
                </p>
                <h2 className={styles.title}>{detail.item.title}</h2>
                <div className={styles.price}>
                  {detail.item.price.currency === 'ARS' ? '$ ' : 'U$S '}
                  {detail.item.price.amount}
                  {detail.item.free_shipping && (<img src={freeShipping} alt="free shipping" />)}
                </div>
                <button type="button">Comprar</button>
              </div>
            </div>
            <div className={styles.description}>
              <h1>Descripción producto</h1>
              <p>{detail.item.description}</p>
            </div>
          </div>
        </>
      ) : (
        <>
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

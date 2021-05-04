import React from 'react';
import { Helmet } from 'react-helmet';
import notFound from '../../assets/not-found.svg';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <>
    {/*  Ths view is used to show the user that their search was not found. */}
    <Helmet>
      <title>Not Found | Mercado Libre</title>
    </Helmet>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.image}>
          <img src={notFound} alt='not-found' />
        </div>
        <div className={styles.info}>
          <h1>No hay publicaciones que coincidan con tu búsqueda.</h1>
          <ul>
            <li>
              <strong>Revisá la ortografía </strong>
              de la palabra.
            </li>
            <li>
              Utilizá
              <strong> palabras más genéricas </strong>o menos palabras.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default NotFound;

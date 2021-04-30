import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import styles from './Main.module.scss';
import logo from '../../assets/logo__large_plus.png';
import logoMobile from '../../assets/logo__small.png';
import searchIcon from '../../assets/search-icon.svg';

export const Main = () => {
  //useFormHook setea valores manejando el evento onChange
  const [formValues, handleInputChange] = useForm({
    query: '',
  });

  //valor a pasar en el input
  const { query } = formValues;

  //Manejo del submit
  const handleSubmit = (e) => {
    (e.key === 'Enter' || e.type === 'click') && console.log(query);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link className={styles.logo}>
          <img className={styles.desk} src={logo} alt="logo mercadolibre"/>
            <img className={styles.mobile} src={logoMobile} alt="logo mercadolibre"/>
          </Link>
          <div className={styles.inputContainer}>
            <input
            className={styles.input}
            placeholder="Buscar en Mercado Libre"
              type='text'
              value={query}
              onChange={handleInputChange}
              name='query'
              onKeyPress={handleSubmit}
            />
            <button className={styles.btn} onClick={handleSubmit}>
              <img className={styles.btnImg} src={searchIcon} alt='icono busqueda' />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

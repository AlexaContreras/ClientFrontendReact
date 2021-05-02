import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import styles from './SearchWrapper.module.scss';
import logo from '../../assets/logo__large_plus.png';
import logoMobile from '../../assets/logo__small.png';
import searchIcon from '../../assets/search-icon.svg';
import { AppContext } from '../../Context/Context';

const SearchWrapper = () => {
  // useFormHook setea valores manejando el evento onChange
  const [formValues, handleInputChange] = useForm({
    query: '',
  });
  const [state, setState] = useContext(AppContext);
  // valor a pasar en el input
  const { query } = formValues;

  // Manejo del submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, query });
  };

  const handleClick = () => {
    formValues.query = '';
    setState({
      query: null,
      id: null,
      items: null,
      detail: null,
    });
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link to="/" className={styles.logo} onClick={handleClick}>
            <img className={styles.desk} src={logo} alt="logo mercadolibre" />
            <img className={styles.mobile} src={logoMobile} alt="logo mercadolibre" />
          </Link>
          <div className={styles.inputContainer}>
            <form onSubmit={handleSubmit}>
              <input
                className={styles.input}
                placeholder="Buscar en Mercado Libre"
                type="text"
                value={query}
                onChange={handleInputChange}
                name="query"
              />
              <button className={styles.btn} type="submit">
                <img className={styles.btnImg} src={searchIcon} alt="icono busqueda" />
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default SearchWrapper;

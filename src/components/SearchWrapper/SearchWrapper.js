import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useForm from '../../hooks/useForm';
import styles from './SearchWrapper.module.scss';
import logo from '../../assets/logo__large_plus.png';
import logoMobile from '../../assets/logo__small.png';
import searchIcon from '../../assets/search-icon.svg';
import { AppContext } from '../../Context/Context';

const SearchWrapper = () => {
  // useFormHook sets values by handling the onChange event
  const [formValues, handleInputChange] = useForm({
    query: '',
  });
  const [state, setState] = useContext(AppContext);
  // Value to be passed in the input
  const { query } = formValues;

  // Manejo del submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, query });
  };

  // We set the status with the query received from the form
  const handleClick = () => {
    formValues.query = '';
    setState({
      query: null,
      id: null,
      items: null,
      detail: null,
    });
  };

  const location = useLocation();
  const queryUrl = queryString.parse(location.search);

  // If we have a query set in the url, we pass it as a new status
  useEffect(() => {
    if (Object.keys(queryUrl).length !== 0) {
      if (query !== queryUrl.search) {
        setState({ ...state, query: queryUrl.search });
      }
    }
  }, [queryUrl.search]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link to='/' className={styles.logo} onClick={handleClick}>
            <img className={styles.desk} src={logo} alt='logo mercadolibre' />
            <img
              className={styles.mobile}
              src={logoMobile}
              alt='logo mercadolibre'
            />
          </Link>
          <div className={styles.inputContainer}>
            <form onSubmit={handleSubmit}>
              <input
                className={styles.input}
                placeholder='Buscar en Mercado Libre'
                type='text'
                value={query}
                onChange={handleInputChange}
                name='query'
              />
              <button className={styles.btn} type='submit'>
                <img
                  className={styles.btnImg}
                  src={searchIcon}
                  alt='icono busqueda'
                />
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default SearchWrapper;

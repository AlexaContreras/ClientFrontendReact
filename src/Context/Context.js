import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useEffectApi from '../hooks/useEffectApi';

const AppProvider = ({ children }) => {
  const location = useLocation();
  const queryUrl = queryString.parse(location.search);
  let queryToShow;

  if (Object.keys(queryUrl).length === 0) {
    queryToShow = null;
  } else {
    queryToShow = queryUrl.search;
  }

  const [state, setState] = useState({
    query: queryToShow,
    id: null,
    items: null,
    detail: null,
  });

  const {
    query, id,
  } = state;

  useEffectApi(query, `?query=${query}`, setState, state, `/items?search=${query}`, 'items');
  useEffectApi(id, `/${id}`, setState, state, `/items/${id}`, 'detail');

  return (
    <>
      <AppContext.Provider value={[state, setState]}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppProvider;
export const AppContext = createContext();
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

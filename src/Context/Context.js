import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import useEffectApi from '../hooks/useEffectApi';

const AppProvider = ({ children }) => {
  // The status is initialized
  const [state, setState] = useState({
    query: null,
    id: null,
    items: null,
    detail: null,
  });

  const { query, id } = state;

  // The useEffect is triggered to request the API data.
  useEffectApi(
    query,
    `?query=${query}`,
    setState,
    state,
    `/items?search=${query}`,
    'items'
  );
  useEffectApi(id, `/${id}`, setState, state, `/items/${id}`, 'detail');

  // The Provider is created
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

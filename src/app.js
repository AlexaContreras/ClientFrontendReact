import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { Products } from './components/Products/Products';

import './styles/styles.scss';

export const App = () => {
  return (
    <>
      <Main />
      <Switch>
        <Route exact path='/products' component={Products} />
      </Switch>
    </>
  );
};

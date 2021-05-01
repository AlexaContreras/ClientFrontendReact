import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { Items } from './components/Items/Items';
import { Main } from './components/Main/Main';
import { NotFound } from './components/NotFound/NotFound';
import AppProvider from './Context/Context';

import './styles/styles.scss';

export const App = () => {

  return (
    <AppProvider>
      <Main />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/items' component={Items} />
        <Route exact path='/items/:id' component={ItemDetail} />
        <Route component={NotFound} />
      </Switch>
    </AppProvider>
  );
};

const Home = () => {
  return (
    <>
    </>
  )
}
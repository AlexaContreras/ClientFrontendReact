import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import SearchWrapper from './components/SearchWrapper/SearchWrapper';
import AppProvider from './Context/Context';
import './styles/styles.scss';

const Items = React.lazy(() => import('./components/Items/Items'));
const ItemDetail = React.lazy(() => import('./components/ItemDetail/ItemDetail'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));

const Home = () => (
  <Helmet>
    <title>Mercado Libre Argentina</title>
  </Helmet>
);

const App = () => (
  <>
    <AppProvider>
      <SearchWrapper />
      <Suspense fallback="">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Items} />
          <Route exact path="/items/:id" component={ItemDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </AppProvider>
  </>
);

export default App;

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
    <title>Mercado Libre</title>
  </Helmet>
);

const App = () => (
  <>
    <AppProvider>
      <SearchWrapper />
      <Switch>
        <Route exact path="/" component={Home} />
        <Suspense fallback={<p>Loading</p>}>
          <Route exact path="/items" component={Items} />
          <Route exact path="/items/:id" component={ItemDetail} />
          <Route component={NotFound} />
        </Suspense>
      </Switch>
    </AppProvider>
  </>
);

export default App;

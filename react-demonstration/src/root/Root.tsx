import './Root.scss';
import React, { Suspense } from 'react';
import { Login, LoginRoute } from '../routes';
import Header from '../components/header/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Root() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={`${LoginRoute}`} exact component={Login} />
            <Route render={() => <h1>404 - NOT FOUND</h1>} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default Root;

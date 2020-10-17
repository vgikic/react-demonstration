import './Root.scss';
import React, { Suspense } from 'react';
import Header from '../components/header/Header';
import Account from '../components/account/Account';
import { AccountRoute, Login, LoginRoute } from '../routes';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import IState from '../common/interface/IState';
import IAccountPayload from '../components/account/state/IAccountPayload';
import Spinner from '../components/spinner/Spinner';


const mapStateToProps = ({ account }: IState) => {
  const { payload } = account;
  return { ...payload };
}

function Root(props: IAccountPayload) {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <Spinner></Spinner>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>

            <Route path={`${LoginRoute}`} exact component={Login} />

            {getAccountRoute(props)}

            <Route render={() => <h1>404 - NOT FOUND</h1>} />

          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

const getAccountRoute = (accountPayload: IAccountPayload) => {
  const route = accountPayload.isAuthenticated ?
    <Route path={`${AccountRoute}`} exact component={Account} /> : <Redirect from={`${AccountRoute}`} to={`${LoginRoute}`} />;
  return route;
}

export default connect(mapStateToProps)(Root);

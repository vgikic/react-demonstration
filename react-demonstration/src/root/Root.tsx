import './Root.scss';
import { connect } from 'react-redux';
import React, { Suspense, useEffect } from 'react';
import IState from '../common/interface/IState';
import Header from '../components/header/Header';
import Spinner from '../components/spinner/Spinner';
import Account from '../components/account/Account';
import { AccountRoute, Items, ItemsRoute, Login, LoginRoute } from '../routes';
import IAccountPayload from '../components/account/state/IAccountPayload';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { tryLoadCredentials } from '../components/account/actions/AccountActionCreator';

const mapStateToProps = ({ account }: IState) => {
  const { payload } = account;
  return { ...payload };
}

const mapDispatchToProps = (dispatch) => {
  return {
    tryLoadCredentials: () => dispatch(tryLoadCredentials())
  }
}

function Root(props: IAccountPayload & { tryLoadCredentials: () => void }) {

  useEffect(() => {
    props.tryLoadCredentials();
  }, []);

  return (
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <Spinner></Spinner>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>

            <Route path={`${LoginRoute}`} exact component={Login} />

            {getAccountRoute(props)}

            {getItemsRoute(props)}

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

const getItemsRoute = (accountPayload: IAccountPayload) => {
  const route = accountPayload.isAuthenticated ?
    <Route path={`${ItemsRoute}`} exact component={Items} /> : <Redirect from={`${ItemsRoute}`} to={`${LoginRoute}`} />;
  return route;
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);

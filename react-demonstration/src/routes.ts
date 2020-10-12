
import React from 'react';

export const LoginRoute = '/login'
export const Login = React.lazy(() => import('./components/login/Login'));

export const AccountRoute = '/account';
export const Account = React.lazy(() => import('./components/account/Account'));


export const ItemsRoute = '/items';



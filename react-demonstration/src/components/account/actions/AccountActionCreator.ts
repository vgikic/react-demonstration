
import { AxiosResponse } from 'axios';
import IAccountAction from './IAccountAction';
import axios from '../../../lib/axios-authentication-configuration';
import ISignInResponse from '../ISignInResponse';
import IAccountState from '../state/IAccountState';

const login = (token: string, exipresIn: string, refreshToken: string): IAccountAction => {
    return {
        type: "LOG-IN",
        payload: {
            isAuthenticated: true,
            token: token,
            expiresIn: exipresIn,
            refreshToken: refreshToken
        }
    }
}

const loading = () => {
    return {
        type: 'LOADING'
    }
}


export const loginAsync = (email: string, password: string) => {
    return (dispatch: (action: (IAccountAction | { type: string })) => void, getState: () => IAccountState) => {
        debugger;
        const data = { email: email, password: password, returnSecureToken: true };
        dispatch(loading());
        axios.post('', data)
            .then((response: AxiosResponse<ISignInResponse>) => {
                const loginAction = login(response.data.idToken, response.data.expiresIn, response.data.refreshToken);
                dispatch(loginAction);
            })
            .catch(error => {
                alert('ERROR');
            });
    }
}
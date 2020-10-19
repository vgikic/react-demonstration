import { loadingEnd } from './../../spinner/actions/LoaderActionCreator';

import { AxiosResponse } from 'axios';
import IAccountAction from './IAccountAction';
import axios from '../../../lib/axios-authentication-configuration';
import ISignInResponse from '../ISignInResponse';
import IAccountState from '../state/IAccountState';
import { loadingStart } from '../../spinner/actions/LoaderActionCreator';

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

export const logout = () => {
    return {
        type: "LOG-OUT"
    }
}

export const loginAsync = (email: string, password: string) => {
    return (dispatch: (action: (IAccountAction | { type: string })) => void, getState: () => IAccountState) => {
        const data = { email: email, password: password, returnSecureToken: true };
        dispatch(loadingStart());
        axios.post('', data)
            .then((response: AxiosResponse<ISignInResponse>) => {
                const loginAction = login(response.data.idToken, response.data.expiresIn, response.data.refreshToken);
                dispatch(loginAction);
                dispatch(loadingEnd());
            })
            .catch(error => {
                alert('ERROR');
            });
    }
}
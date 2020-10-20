import IAccountPayload from "./IAccountPayload";
import IAccountState from "./IAccountState";
import axios from '../../../lib/axios-default-configuration';
import { LOCAL_STORAGE_CREDENTIALS } from "../../../common/constants/global";


const addCredentialsToLocalStorage = (data: IAccountPayload) => {

    localStorage.removeItem(LOCAL_STORAGE_CREDENTIALS);

    const credentials: IAccountPayload = {
        ...data
    }

    localStorage.setItem(LOCAL_STORAGE_CREDENTIALS, JSON.stringify(credentials));
}

const LoginHandler = (payload: IAccountPayload, state: IAccountState): IAccountState => {

    const nextState: IAccountState = {
        ...state,
        payload: payload
    };
    nextState.payload.expiresIn = new Date().getTime() + payload.expiresIn * 1000;

    axios.defaults.headers['Authorization'] = `Bearer ${payload.token}`;

    addCredentialsToLocalStorage(payload);

    return nextState;
}

export default LoginHandler;
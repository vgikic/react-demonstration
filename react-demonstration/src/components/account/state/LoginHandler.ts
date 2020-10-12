import IAccountPayload from "./IAccountPayload";
import IAccountState from "./IAccountState";
import axios from '../../../lib/axios-default-configuration';

const LoginHandler = (payload: IAccountPayload, state: IAccountState): IAccountState => {

    axios.defaults.headers['Authorization'] = `Bearer ${payload.token}`;

    const nextState: IAccountState = {
        ...state,
        payload: payload
    };

    return nextState;
}

export default LoginHandler;
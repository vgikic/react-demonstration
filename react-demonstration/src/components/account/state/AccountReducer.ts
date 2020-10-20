import { TryLoadCredentials } from './TryLoadCredentialsHandler';
import IAccountAction from "../actions/IAccountAction";
import IAccountPayload from "./IAccountPayload";
import IAccountState from "./IAccountState";
import LoginHandler from "./LoginHandler";
import { Logout } from "./LogOutHandler";

const initialState: IAccountState = {
    logIn: () => { },
    logOut: () => { },
    payload: {
        isAuthenticated: false,
        token: '',
        expiresIn: undefined,
        refreshToken: ''
    } as IAccountPayload
}

const AccountReducer = (state: IAccountState = initialState, action: IAccountAction): IAccountState => {

    switch (action.type) {

        case "LOG-IN": {
            return LoginHandler(action.payload, state);
        }

        case "LOG-OUT": {
            return Logout(state);
        }

        case "TRY-LOAD-CREDENTIALS": {
            return TryLoadCredentials(state);
        }

        default:
            return {
                ...state
            };
    }
}



export default AccountReducer;
import { LOCAL_STORAGE_CREDENTIALS } from "../../../common/constants/global";
import IAccountState from "./IAccountState"

export const Logout = (state: IAccountState): IAccountState => {

    localStorage.removeItem(LOCAL_STORAGE_CREDENTIALS);

    const nextState: IAccountState = {
        ...state,
        payload: {
            expiresIn: null,
            isAuthenticated: false,
            refreshToken: null,
            token: null,
        }
    };

    return nextState;

}

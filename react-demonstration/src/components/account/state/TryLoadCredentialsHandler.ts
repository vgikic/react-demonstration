import { LOCAL_STORAGE_CREDENTIALS } from "../../../common/constants/global";
import IAccountPayload from "./IAccountPayload";
import IAccountState from "./IAccountState";

export const TryLoadCredentials = (state: IAccountState): IAccountState => {

    const val = localStorage.getItem(LOCAL_STORAGE_CREDENTIALS);

    const newState: IAccountState = {
        ...state,
        payload: {
            ...state.payload
        }
    }

    if (val) {

        const credentials: IAccountPayload = JSON.parse(val);
        const now = new Date().getTime();
        const expirationTime = credentials.expiresIn;

        if (now < expirationTime) {
            newState.payload.isAuthenticated = true;
            newState.payload.token = credentials.token;
            newState.payload.expiresIn = expirationTime;
            newState.payload.refreshToken = credentials.refreshToken;
        }

    }

    return newState;
}
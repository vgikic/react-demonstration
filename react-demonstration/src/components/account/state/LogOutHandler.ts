import IAccountState from "./IAccountState"

export const Logout = (state: IAccountState): IAccountState => {
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

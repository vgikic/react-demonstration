import IAccountPayload from "./IAccountPayload";

export default interface IAccountState {
    logIn: (email: string, password: string) => void,
    logOut: () => void,
    payload: IAccountPayload
}
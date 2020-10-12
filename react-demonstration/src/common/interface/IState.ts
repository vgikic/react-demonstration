import IAccountState from "../../components/account/state/IAccountState";

export default interface IState {
    account: IAccountState,
    loading: boolean
}
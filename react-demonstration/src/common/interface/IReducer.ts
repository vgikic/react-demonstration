import IAccountAction from "../../components/account/actions/IAccountAction";
import IAccountState from "../../components/account/state/IAccountState";

export default interface IReducer {
    account: (state: IAccountState | undefined, action: IAccountAction) => IAccountState,
}
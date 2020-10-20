import IAccountState from "../../components/account/state/IAccountState";
import IItemsState from "../../components/items/state/IItemsState";

export default interface IState {
    account: IAccountState,
    loader: boolean,
    items: IItemsState
}
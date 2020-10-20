import IITem from "./IItem";

export default interface IItemsState {
    payload: {
        items: Array<IITem>
    }
}
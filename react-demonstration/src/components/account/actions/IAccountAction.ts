import IAccountPayload from "../state/IAccountPayload";

export default interface IAccountAction {
    payload: IAccountPayload,
    type: 'LOG-IN' | 'LOG-OUT'
}
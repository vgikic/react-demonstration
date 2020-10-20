import { loadingStart, loadingEnd } from './../../spinner/actions/LoaderActionCreator';
import { AxiosResponse } from "axios";
import IITemsAction from "./IITemsAction"
import axios from '../../../lib/axios-default-configuration';


const fetchItems = (data): IITemsAction => {
    return {
        type: "ITEMS-LOADED",
        payload: {
            items: data
        }
    }
}

export const fetchItemsAsync = () => {
    return (dispatch, getState) => {

        dispatch(loadingStart());

        const state = getState();
        const token = state.account.payload.token;

        axios.get(`/items.json?auth=${token}`)
            .then((response: AxiosResponse<any>) => {
                const data = response.data;
                dispatch(fetchItems(data));
                dispatch(loadingEnd());
            })
            .catch(error => {
                dispatch(loadingEnd());
            });
    }
}
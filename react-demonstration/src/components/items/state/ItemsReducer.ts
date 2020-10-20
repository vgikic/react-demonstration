
const initialState = {
    payload: {
        items: []
    }
}
const ItemsReducer = (state = initialState, action: { payload: { items: [] }, type: 'LOAD-ITEMS' | 'ITEMS-LOADED' }) => {

    switch (action.type) {

        case 'ITEMS-LOADED': {
            return {
                ...state,
                payload: {
                    items:[...action.payload.items]
                }
            };
        }

        case 'LOAD-ITEMS': {
            return {
                ...state
            };
        }

        default:
            return {
                ...state
            };
    }
}

export default ItemsReducer;
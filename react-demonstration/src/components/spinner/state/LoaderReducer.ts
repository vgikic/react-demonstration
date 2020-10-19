import ILoaderState from "./ILoaderState";

const initialState = {
    loading: false
}

const LoaderReducer = (state: ILoaderState = initialState, action) => {

    switch (action.type) {

        case "LOADING-START": {
            return {
                loading: true
            }
        }

        case "LOADING-END": {
            return {
                loading: false
            }
        }

        default: {
            return {
                ...state
            }
        }

    }
}

export default LoaderReducer;

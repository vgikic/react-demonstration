import ILoaderState from "./ILoaderState";

const initialState: ILoaderState = {
    loading: false
}

const LoaderReducer = (state: ILoaderState = initialState, action: { type: "LOADING-START" | "LOADING-END" }): ILoaderState => {

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

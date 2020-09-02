import {getAuthUserData} from "./authReducer";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState: any = {
    initialized: false
};

const appReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess: any = () => ({type: INITIALIZED_SUCCESS});
export const initializeApp: any = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;
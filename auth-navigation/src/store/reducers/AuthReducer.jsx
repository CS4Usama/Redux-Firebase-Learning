import {LOGIN, LOGOUT} from '../actions/AuthAction';


let initialState = {
    isUserLoggedIn: false,
    // user: {}
    user: null
}

function AuthReducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN:
            // If User Login then What ?
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload
            };

        case LOGOUT:
            // If User Login then What ?
            return {
                ...state,
                isUserLoggedIn: false,
                // user: {}
                user: null
            };

        default:
            return state;
    }
}

export default AuthReducer;
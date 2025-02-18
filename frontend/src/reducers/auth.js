import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
    AUTH_SUCCESS,
    AUTH_FAILED,
    FORGET_USER_SUCCESS,
    FORGET_USER_FAILED,
    RESET_USER_SUCCESS,
    RESET_USER_FAILED,
} from '../actions/types';

const initialState = {
    isAuthenticated: null
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case AUTH_SUCCESS:
        case AUTH_FAILED: 
            return {
                ...state,
                isAuthenticated: payload,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
            }
        case REGISTER_FAILED:
        case LOGIN_FAILED:
        case LOGOUT_FAILED:
        case FORGET_USER_SUCCESS:
        case FORGET_USER_FAILED:
        case RESET_USER_SUCCESS:
        case RESET_USER_FAILED:
            return state;
        default:
            return state;
    }
}
import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
} from '../actions/types';

const initialState = {
    isAuthenticated: null,
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    country: '',
    city: '',
    IQ: '',
    password: '',
    confirmpassword: '',
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case REGISTER_FAILED:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state;
    }
}
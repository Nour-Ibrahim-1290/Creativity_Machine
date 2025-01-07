import {
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILED,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
} from '../actions/types';

const initialState = {
    username: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    country: '',
    city: '',
    IQ: '',
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOAD_USER_SUCCESS:
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                username: payload.name,
                email: payload.email,
                phone: payload.phone,
                age: payload.age,
                gender: payload.gender,
                country: payload.country,
                city: payload.city,
                IQ: payload.IQ,
            }
        case LOAD_USER_FAILED:
            return {
                ...state,
                username: '',
                email: '',
                phone: '',
                age: '',
                gender: '',
                country: '',
                city: '',
                IQ: '',
            }
        case UPDATE_USER_FAILED:
            return {
                ...state,
            }
        default:
            return state;
    }
}
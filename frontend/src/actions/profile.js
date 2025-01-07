import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../config/config';
import {
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILED,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
} from './types';




export const loaduser = () => async dispatch => {
    
    const configAttr = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        withCredentials: true
    }

    try {
        const res = await axios.get(`${config.serverUrl}/users/get_user/`, configAttr);
        
        if (res.status <= 200 && res.status < 300) {
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: res.data.profile,
            });            
        } else {
            dispatch({
                type: LOAD_USER_FAILED
            });
        }
    } catch (err) {
        dispatch({
            type: LOAD_USER_FAILED
        });
    }
};




export const updateuser = (updateData) => async dispatch => {
    
    const configAttr = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        withCredentials: true
    }

    try {
        const res = await axios.put(`${config.serverUrl}/users/get_user/`, 
            JSON.stringify(updateData), configAttr);
        
        if (res.status <= 200 && res.status < 300) {
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: res.data.profile,
            });            
        } else {
            dispatch({
                type: UPDATE_USER_FAILED
            });
        }
    } catch (err) {
        dispatch({
            type: UPDATE_USER_FAILED
        });
    }
};
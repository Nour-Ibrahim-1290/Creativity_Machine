import config from '../config/config';
import Cookies from 'js-cookie';
import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
} from './types';


export const register = (registerData) => async dispatch => {
    console.log(Cookies.get('csrftoken'));
    const configAttr = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }

    try {
        console.log("In Actions: " +  JSON.stringify(registerData));
        const res = await axios.post(`${config.serverUrl}/users/register/`, 
            JSON.stringify(registerData), configAttr);

        if (res.status >= 300) {
            dispatch({
                type: REGISTER_FAILED
            });
        } else {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }
    } catch (err) {
        dispatch({
            type: REGISTER_FAILED
        });
    }
};

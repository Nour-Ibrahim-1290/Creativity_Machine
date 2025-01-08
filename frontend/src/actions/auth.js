import config from '../config/config';
import { loaduser } from './profile';
import Cookies from 'js-cookie';
import axios from 'axios';
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
} from './types';





export const register = (registerData) => async dispatch => {
    // console.log(Cookies.get('csrftoken'));
    const configAttr = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        withCredentials: true
    }

    try {
        console.log("In Actions: " +  JSON.stringify(registerData));
        const res = await axios.post(`${config.serverUrl}/users/register/`, 
            JSON.stringify(registerData), configAttr);

        if (res.status <= 200 && res.status < 300) {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            
        } else {
            dispatch({
                type: REGISTER_FAILED
            });
        }
    } catch (err) {
        dispatch({
            type: REGISTER_FAILED
        });
    }
};



export const checkAuthenticated = () => async dispatch => {
    const configAttr = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        withCredentials: true
    }

    try {
        //console.log("In Actions: " +  JSON.stringify(registerData));
        const res = await axios.get(`${config.serverUrl}/users/check-authenticated/`, configAttr);

        // console.log(res.data);
        if (res.data.error || res.data.isAuthenticated === 'error')
        {
         
            dispatch({ 
                type: AUTH_FAILED,
                payload: false
             });
            
        } else if ( res.data.isAuthenticated === 'success') {
            dispatch({
                type: AUTH_SUCCESS,
                payload: true,
            
        });
    } else {
        dispatch({ 
            type: AUTH_FAILED,
            payload: false
         });
    }
    } catch (err) {
        dispatch({ 
            type: AUTH_FAILED,
            payload: false
         });
    }
};




export const login = (loginData) => async dispatch => {
    // console.log(Cookies.get('csrftoken'));
    const configAttr = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        withCredentials: true
    }

    try {
        //console.log("In Actions: " +  JSON.stringify(registerData));
        const res = await axios.post(`${config.serverUrl}/users/login/`, 
            JSON.stringify(loginData), configAttr);

        if (res.status <= 200 && res.status < 300) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.email,
            });

            // load  the user
            dispatch(loaduser());
            
        } else {
            dispatch({
                type: LOGIN_FAILED
            });
        }
    } catch (err) {
        dispatch({
            type: LOGIN_FAILED
        });
    }
};




export const logout = () => async dispatch => {
    // console.log(Cookies.get('csrftoken'));
    const configAttr = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        withCredentials: true
    }

    try {
        console.log("In Actions: Logout");
        const res = await axios.post(`${config.serverUrl}/users/logout/`, {}, configAttr);

        if (res.status <= 200 && res.status < 300) {
            dispatch({
                type: LOGOUT_SUCCESS,
            });
            console.log("Logged Out");
            
        } else {
            dispatch({
                type: LOGOUT_FAILED
            });
            console.log("Logged Out ELSE");
        }
    } catch (err) {
        dispatch({
            type: LOGOUT_FAILED
        });
        console.log("Logged Out ERROR");
    }
};



export const forgetpassword = (emailData) => async dispatch => {
    // console.log(Cookies.get('csrftoken'));
    const configAttr = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        withCredentials: true
    }

    try {
        console.log("In Actions: Forget Password");
        const res = await axios.post(`${config.serverUrl}/users/update/forgetpassword/`, emailData, configAttr);

        if (res.status <= 200 && res.status < 300) {
            dispatch({
                type: FORGET_USER_SUCCESS,
            });
            console.log("Email sent");
            
        } else {
            dispatch({
                type: FORGET_USER_FAILED
            });
            console.log("Forget Password ELSE");
        }
    } catch (err) {
        dispatch({
            type: FORGET_USER_FAILED
        });
        console.log("Forget Password ERROR");
    }
};



export const resetpassword = (resetData) => async dispatch => {
    // console.log(Cookies.get('csrftoken'));
    const configAttr = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        withCredentials: true
    }

    try {
        console.log("In Actions: Reset Password");
        const res = await axios.post(`${config.serverUrl}/users/update/passwordreset-confirm/`, resetData, configAttr);

        if (res.status <= 200 && res.status < 300) {
            dispatch({
                type: RESET_USER_SUCCESS,
            });
            console.log("Complete Reset");
            
        } else {
            dispatch({
                type: RESET_USER_FAILED
            });
            console.log("Forget Password ELSE");
        }
    } catch (err) {
        dispatch({
            type: RESET_USER_FAILED
        });
        console.log("Forget Password ERROR");
    }
};
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config/config';




const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        //console.log(cookies);
        //console.log(cookies[0].length);
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    //console.log(cookieValue);
    return cookieValue;
};




const CSRFToken = () => {
    const [csrftoken, setCsrftoken] = useState('');



    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`${config.serverUrl}/users/get-csrf-token/`, { withCredentials: true });
                setCsrftoken(getCookie('csrftoken')); // Move this inside the try block
            } catch (error) {
                //console.error("Error fetching CSRF Tokens: " + error);
            }
        };
        fetchData();
    }, []);


    return (
        <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
    );
};

export default CSRFToken;
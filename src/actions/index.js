import { SIGN_USER_UP, GET_ERRORS } from '../constants';

import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 10000,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export const registerUser = (userData) => dispatch => {

    Axios
        .post('/users/signup', userData)
        .then(user => {
            dispatch({
                type: SIGN_USER_UP,
                data: user
            })
        })
        .catch(err => {            
            dispatch({
                type: GET_ERRORS,
                data: err
            })
        });

}
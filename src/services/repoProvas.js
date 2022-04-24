import axios from 'axios';
import { api } from './apiUrl';

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

function postSignUp(body) {
    const promise = axios.post(`${api}/users/registration`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${api}/users/authentication`, body);
    return promise;
}

export {
    postSignUp,
    postLogin,
};

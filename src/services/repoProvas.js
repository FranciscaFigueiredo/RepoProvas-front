import axios from 'axios';
import { api } from './apiUrl';

function createConfig({ token }) {
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


function getTerms({ token }) {
    const config = createConfig({ token })
    const promise = axios.get(`${api}/terms`, config);
    return promise;
}

function getTests({ token, term }) {
    const config = createConfig({ token })
    const promise = axios.get(`${api}/tests/terms/${term}`, config);
    return promise;
}

function getDisciplinesByTermNumber({ token, term }) {
    const config = createConfig({ token })
    const promise = axios.get(`${api}/disciplines/terms/${term}`, config);
    return promise;
}

function getTestsByDisciplineTermNumber({ token, term, discipline }) {
    const config = createConfig({ token })
    const promise = axios.get(`${api}/tests/terms/${term}/disciplines/${discipline}`, config);
    return promise;
}

export {
    postSignUp,
    postLogin,
    getTerms,
    getTests,
    getDisciplinesByTermNumber,
    getTestsByDisciplineTermNumber,
};

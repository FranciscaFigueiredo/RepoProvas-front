import axios from "axios";
import { api } from "./apiUrl";

function postExam(body) {
    const promise = axios.post(`${api}/exam`, body);
    return promise;
}

export {
    postExam,
};

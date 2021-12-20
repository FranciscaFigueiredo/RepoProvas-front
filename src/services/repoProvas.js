import axios from "axios";
import { api } from "./apiUrl";

function postExam(body) {
    const promise = axios.post(`${api}/exam`, body);
    return promise;
}

function getExams() {
    const promise = axios.get(`${api}/exam`);
    return promise;
}

function getTeachers() {
    const promise = axios.get(`${api}/exam/teachers`);
    return promise;
}

function getExamsByTeacher(id) {
    const promise = axios.get(`${api}/exam/teacher/${id}`);
    return promise;
}

function getSubjects() {
    const promise = axios.get(`${api}/exam/subjects`);
    return promise;
}

function getExamsBySubject(id) {
    const promise = axios.get(`${api}/exam/subject/${id}`);
    return promise;
}

export {
    postExam,
    getExams,
    getTeachers,
    getExamsByTeacher,
    getSubjects,
    getExamsBySubject,
};

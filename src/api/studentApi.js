import axios from 'axios';

const API_URL = 'http://localhost:8081/api/students'; 

export const fetchStudentsApi = () => {
  return axios.get(API_URL);
};


export const addStudentApi = (student) => {
  return axios.post(API_URL, student);
};


export const updateStudentApi = (id, student) => {
  return axios.put(`${API_URL}/${id}`, student);
};


export const deleteStudentApi = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

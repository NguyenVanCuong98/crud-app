// action types
export const FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';

export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST';
export const UPDATE_STUDENT_REQUEST = 'UPDATE_STUDENT_REQUEST';
export const DELETE_STUDENT_REQUEST = 'DELETE_STUDENT_REQUEST';

// action creators
export const fetchStudents = () => ({ type: FETCH_STUDENTS_REQUEST });
export const addStudent = (student) => ({ type: ADD_STUDENT_REQUEST, payload: student });
export const updateStudent = (id, student) => ({ type: UPDATE_STUDENT_REQUEST, payload: { id, student } });
export const deleteStudent = (id) => ({ type: DELETE_STUDENT_REQUEST, payload: id });

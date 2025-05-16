export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export const ADD_STUDENT = 'ADD_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

export const fetchStudents = () => ({
  type: FETCH_STUDENTS,
});

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});

export const editStudent = (index, student) => ({
  type: EDIT_STUDENT,
  payload: { index, student },
});

export const deleteStudent = (index) => ({
  type: DELETE_STUDENT,
  payload: index,
});

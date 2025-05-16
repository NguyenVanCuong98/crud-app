import { FETCH_STUDENTS, ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from '../actions/studentActions';

const initialState = {
  students: [
    { name: 'Nguyễn Văn A' },
    { name: 'Trần Thị B' },
    { name: 'Lê Văn C' }
  ],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS:
      return { ...state };
    
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case EDIT_STUDENT:
      const updatedStudents = [...state.students];
      updatedStudents[action.payload.index] = action.payload.student;
      return {
        ...state,
        students: updatedStudents,
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default studentReducer;

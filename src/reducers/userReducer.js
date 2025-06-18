// reducer/studentReducer.js
import {
  FETCH_STUDENTS_SUCCESS
} from '../actions/userActions';

const initialState = {
  students: [],
  loading: false,
  error: null,
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
      };
    default:
      return state;
  }
}

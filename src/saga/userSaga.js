import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  fetchStudentsApi,
  addStudentApi,
  updateStudentApi,
  deleteStudentApi
} from '../api/studentApi';
import {
  FETCH_STUDENTS_REQUEST, FETCH_STUDENTS_SUCCESS, FETCH_STUDENTS_FAILURE,
  ADD_STUDENT_REQUEST, UPDATE_STUDENT_REQUEST, DELETE_STUDENT_REQUEST,
  fetchStudents
} from '../actions/userActions';
import { message } from 'antd';

function* fetchStudentsSaga() {
  try {
    const res = yield call(fetchStudentsApi);
    yield put({ type: FETCH_STUDENTS_SUCCESS, payload: res.data });
  } catch (err) {
    yield put({ type: FETCH_STUDENTS_FAILURE, payload: err.message });
  }
}

function* addStudentSaga(action) {
  try {
    yield call(addStudentApi, action.payload);
    yield put(fetchStudents());
    message.success('Thêm sinh viên thành công');
  } catch (err) {
    message.error('Thêm sinh viên thất bại');
  }
}

function* updateStudentSaga(action) {
  try {
    const { id, student } = action.payload;
    yield call(updateStudentApi, id, student);
    yield put(fetchStudents());
    message.success('Cập nhật thành công');
  } catch (err) {
    message.error('Cập nhật thất bại');
  }
}

function* deleteStudentSaga(action) {
  try {
    yield call(deleteStudentApi, action.payload);
    yield put(fetchStudents());
    message.success('Xóa thành công');
  } catch (err) {
    message.error('Xóa thất bại');
  }
}

export default function* studentSaga() {
  yield all([
    takeLatest(FETCH_STUDENTS_REQUEST, fetchStudentsSaga),
    takeLatest(ADD_STUDENT_REQUEST, addStudentSaga),
    takeLatest(UPDATE_STUDENT_REQUEST, updateStudentSaga),
    takeLatest(DELETE_STUDENT_REQUEST, deleteStudentSaga),
  ]);
}

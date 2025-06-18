import { all } from 'redux-saga/effects';
import  studentSaga  from './userSaga';

export default function* rootSaga() {
  yield all([
    studentSaga(),
  ]);
}

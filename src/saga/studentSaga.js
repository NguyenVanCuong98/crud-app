
import { takeEvery, put } from 'redux-saga/effects';

function* studentSaga() {
  yield takeEvery('ACTION_TYPE', someFunction);
}

export { studentSaga };

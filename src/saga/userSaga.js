import { takeEvery, put } from 'redux-saga/effects';


function* someFunction(action) {
  try {
    console.log('Action received:', action);
    yield put({ type: 'ACTION_SUCCESS' });
  } catch (error) {
    console.error('Error:', error);
    yield put({ type: 'ACTION_FAILURE' });
  }
}


function* watchUserSaga() {
  yield takeEvery('ACTION_TYPE', someFunction);
}

export { watchUserSaga };  // Named export

import { all, call, takeEvery } from 'redux-saga/effects';
import { callApi } from '../../services/index';
import { get } from '../../services/request';
import { fetchPostsActionDone } from '../actions/postActions';
import * as constants from '../constants';

function* fetchPostsSaga() {
  try {
    yield call(
      callApi,
      '/posts',
      get,
      null,
      fetchPostsActionDone,
    );
  } catch (e) {
    console.log(e);
  }
}
function* watchfetchPostsSaga() {
  yield takeEvery(constants.FETCH_POSTS, fetchPostsSaga);
}


export default function* rootSaga() {
  yield all([
    watchfetchPostsSaga(),
  ]);
}
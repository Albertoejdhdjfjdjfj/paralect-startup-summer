import { takeEvery, put, all } from 'redux-saga/effects';
import { FETCH_VACANCIES, FETCH_BRANCHES } from '../actions/actionsTypes';
import {
  requestVacancies,
  requestVacanciesSuccess,
  requestVacanciesError,
  requestBranches,
  requestBranchesSuccess,
  requestBranchesError
} from '../actions/actions';
import { getBranches, getVacancies } from '../../assets/functions/functions';

export function* rootSaga() {
  yield all([watchFetchVacanciens(), watchFetchBranches()]);
}

function* watchFetchVacanciens() {
  yield takeEvery(FETCH_VACANCIES, fetchVacancies);
}

function* watchFetchBranches() {
  yield takeEvery(FETCH_BRANCHES, fetchBranches);
}

function* fetchVacancies(action) {
  const { filter, search, numPage } = action.payload;
  try {
    yield put(requestVacancies());
    const data = yield getVacancies(filter, search, numPage);
    yield put(requestVacanciesSuccess(data));
  } catch (error) {
    yield put(requestVacanciesError());
  }
}

function* fetchBranches() {
  try {
    yield put(requestBranches());
    const data = yield getBranches();
    yield put(requestBranchesSuccess(data));
  } catch (error) {
    yield put(requestBranchesError());
  }
}

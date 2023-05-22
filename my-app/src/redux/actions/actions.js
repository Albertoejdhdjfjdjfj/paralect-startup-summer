import { createAction } from 'redux-actions';
import {
  SET_FILTER,
  SET_SEARCH,
  SET_NUM_PAGE,
  RESET_ALL,
  FETCH_VACANCIES,
  REQUEST_VACANCIES,
  REQUEST_VACANCIES_SUCCESS,
  REQUEST_VACANCIES_ERROR,
  FETCH_BRANCHES,
  REQUEST_BRANCHES,
  REQUEST_BRANCHES_SUCCESS,
  REQUEST_BRANCHES_ERROR
} from './actionsTypes';

export const setFilter = createAction(SET_FILTER);
export const setSearch = createAction(SET_SEARCH);
export const setNumPage = createAction(SET_NUM_PAGE);
export const resetAll = createAction(RESET_ALL);
export const fetchVacancies = createAction(FETCH_VACANCIES);
export const requestVacancies = createAction(REQUEST_VACANCIES);
export const requestVacanciesSuccess = createAction(REQUEST_VACANCIES_SUCCESS);
export const requestVacanciesError = createAction(REQUEST_VACANCIES_ERROR);
export const fetchBranches = createAction(FETCH_BRANCHES);
export const requestBranches = createAction(REQUEST_BRANCHES);
export const requestBranchesSuccess = createAction(REQUEST_BRANCHES_SUCCESS);
export const requestBranchesError = createAction(REQUEST_BRANCHES_ERROR);

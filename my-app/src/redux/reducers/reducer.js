import {
  SET_FILTER,
  SET_SEARCH,
  SET_NUM_PAGE,
  RESET_ALL,
  REQUEST_VACANCIES,
  REQUEST_VACANCIES_SUCCESS,
  REQUEST_VACANCIES_ERROR,
  REQUEST_BRANCHES,
  REQUEST_BRANCHES_SUCCESS,
  REQUEST_BRANCHES_ERROR
} from '../actions/actionsTypes';

const initialState = {
  search: '',
  filter: {
    branch: '',
    salary_from: null,
    salary_to: null
  },
  page: 1,
  vacancies: false,
  branches: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SET_NUM_PAGE:
      return { ...state, page: action.payload };
    case RESET_ALL:
      return { ...state, filter: initialState.filter };
    case REQUEST_VACANCIES:
      return { ...state, vacancies: false };
    case REQUEST_VACANCIES_SUCCESS:
      return { ...state, vacancies: action.payload };
    case REQUEST_VACANCIES_ERROR:
      return { ...state, vacancies: false };
    case REQUEST_BRANCHES:
      return { ...state, branches: [] };
    case REQUEST_BRANCHES_SUCCESS:
      return { ...state, branches: action.payload };
    case REQUEST_BRANCHES_ERROR:
      return { ...state, branches: [] };
    default:
      return state;
  }
}

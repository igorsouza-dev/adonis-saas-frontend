import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';

import { getProjectsSuccess } from './actions';

export function* getProjects() {
  try {
    const response = yield call(api.get, 'projects');
    yield put(getProjectsSuccess(response.data));
  } catch (e) {
    toast.error('There was an error while fetching the projects');
  }
}

export default all([takeLatest('@project/GET_PROJECTS_REQUEST', getProjects)]);

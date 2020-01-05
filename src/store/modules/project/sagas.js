import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';

import {
  getProjectsSuccess,
  getProjectsFailure,
  closeModal,
  createProjectSuccess,
} from './actions';

export function* getProjects() {
  const activeTeam = yield select(state => state.team.activeTeam);
  if (!activeTeam) return;
  try {
    const response = yield call(api.get, 'projects');
    yield put(getProjectsSuccess(response.data));
  } catch (e) {
    yield put(getProjectsFailure());
    toast.error('There was an error while fetching the projects');
  }
}
export function* createProject({ payload }) {
  const { title } = payload;
  try {
    const response = yield call(api.post, 'projects', { title });
    yield put(createProjectSuccess(response.data));
    yield put(closeModal());
    toast.success('Project created successfully.');
  } catch (e) {
    toast.error('There was an error while creating the project');
  }
}

export default all([
  takeLatest('@project/GET_PROJECTS_REQUEST', getProjects),
  takeLatest('@project/CREATE_PROJECT_REQUEST', createProject),
]);

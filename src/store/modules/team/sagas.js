import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';

import { getTeamsSuccess } from './actions';

export function* getTeams() {
  try {
    const response = yield call(api.get, 'teams');
    yield put(getTeamsSuccess(response.data));
  } catch (e) {
    toast.error('There was an error while fetching the teams');
  }
}
export default all([takeLatest('@team/GET_TEAMS_REQUEST', getTeams)]);

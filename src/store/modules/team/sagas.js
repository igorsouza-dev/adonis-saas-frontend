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
export function selectTeam({ payload }) {
  if (!payload) return;
  const { activeTeam } = payload;
  if (activeTeam) {
    api.defaults.headers.TEAM = activeTeam.slug;
  }
}
export function setHeaderTeam({ payload }) {
  if (!payload) return;
  const { activeTeam } = payload.team;
  if (activeTeam) {
    api.defaults.headers.TEAM = activeTeam.slug;
  }
}
export default all([
  takeLatest('persist/REHYDRATE', setHeaderTeam),
  takeLatest('@team/GET_TEAMS_REQUEST', getTeams),
  takeLatest('@team/SELECT_TEAM', selectTeam),
]);

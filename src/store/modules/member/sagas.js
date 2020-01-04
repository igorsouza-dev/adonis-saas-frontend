import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';

import { getMembersSuccess, closeModal } from './actions';

export function* getMembers() {
  try {
    const response = yield call(api.get, 'members');
    yield put(getMembersSuccess(response.data));
  } catch (e) {
    toast.error('There was an error while fetching the members');
  }
}

export default all([takeLatest('@member/GET_MEMBERS_REQUEST', getMembers)]);

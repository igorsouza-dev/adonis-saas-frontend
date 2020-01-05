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
export function* updateMember({ payload }) {
  const { memberId, roles } = payload;
  try {
    yield call(api.put, `members/${memberId}`, {
      roles: roles.map(role => role.id),
    });
  } catch (e) {
    toast.error('There was an error while updating the roles of the user');
  }
}
export default all([
  takeLatest('@member/GET_MEMBERS_REQUEST', getMembers),
  takeLatest('@member/UPDATE_MEMBER_ROLES_REQUEST', updateMember),
]);

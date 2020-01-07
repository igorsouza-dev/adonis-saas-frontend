import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from 'services/api';
import history from 'services/history';
import {
  signInSuccess,
  signFailure,
  signInRequest,
  getPermissionsSuccess,
} from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/main');
  } catch (err) {
    toast.error('Authentication failed! Check your information.');
    yield put(signFailure());
  }
}
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    toast.success('Sign Up was a success!');
    yield put(signInRequest(email, password));
  } catch (err) {
    let message =
      'Sign Up failed! Make sure your informed the right information.';
    if (err) {
      const { response } = err;
      if (response) {
        const { data } = response;
        if (data) {
          const { error } = data;
          if (error) {
            message = error.message;
          }
        }
      }
    }
    toast.error(message);
    yield put(signFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function signOut() {
  history.push('/');
}
export function* getPermissions() {
  const team = yield select(state => state.team.activeTeam);
  const signed = yield select(state => state.auth.signed);

  if (!signed || !team) {
    return null;
  }
  const response = yield call(api.get, 'permissions');
  const { roles, permissions } = response.data;
  yield put(getPermissionsSuccess(roles, permissions));
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/GET_PERMISSIONS_REQUEST', getPermissions),
]);

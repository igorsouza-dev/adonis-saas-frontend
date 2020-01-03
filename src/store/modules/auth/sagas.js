import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import history from 'services/history';

import { signInSuccess, signFailure, signInRequest } from './actions';

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
    let { message } = err;
    if (err.response) {
      if (err.response.data) {
        if (err.response.data.error) {
          message = err.response.data.error;
        }
      }
    }
    toast.error(`Sign Up failed! ${message}`);
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

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

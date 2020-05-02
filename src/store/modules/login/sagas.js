import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import showToast from '../../../components/Toast';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield call(api.post, 'login', { email, password });

    const { auth_token } = response.data.data;
    if (auth_token) {
      yield put(signInSuccess(auth_token, response.data.data));

      history.push('/dashboard');
    } else {
      showToast({
        type: 'error',
        message: 'Please check your email and password.',
        timer: 3000,
      });
    }
  } catch (error) {
    showToast({
      type: 'error',
      message: 'Please check your email and password.',
      timer: 3000,
    });
    return;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

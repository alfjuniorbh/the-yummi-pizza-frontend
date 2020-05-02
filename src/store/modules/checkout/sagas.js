import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import showToast from '../../../components/Toast';

import { clearCart } from '../cart/actions';

function* addCheckout(data) {
  try {
    const cart = yield select((state) => state.cart);
    const order = [data.order, cart];
    yield call(api.post, 'orders', order);
    yield put(clearCart());

    history.push('/dashboard');
  } catch (error) {
    showToast({
      type: 'error',
      message: 'Error when trying to register the order',
      timer: 3000,
    });
    return;
  }
}

export default all([takeLatest('@checkout/ADD_REQUEST', addCheckout)]);

import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import showToast from '../../../components/Toast';

import { addCheckoutSuccess } from './actions';
import { clearCart } from '../cart/actions';

function* addCheckout(data) {
  try {
    const cart = yield select((state) => state.cart);
    const order = [data.order, cart];
    const response = yield call(api.post, 'orders', order);
    yield put(addCheckoutSuccess(response.data));

    yield put(clearCart());

    history.push('/');
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

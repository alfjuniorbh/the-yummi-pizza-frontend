import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import showToast from '../../../components/Toast';

import {
  addToCartSuccess,
  removeSuccess,
  updateAmountSuccess,
} from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id),
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.data[0].amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    showToast({ type: 'error', message: 'Product QTY Out Stock', timer: 3000 });
    return;
  }

  if (productExists) {
    if (amount > stockAmount) {
      showToast({
        type: 'error',
        message: 'Product QTY Out Stock',
        timer: 3000,
      });
      return;
    } else {
      yield put(updateAmountSuccess(id, amount));
      history.push('/cart');
    }
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data.data,
      amount: 1,
    };

    yield put(addToCartSuccess(data));
    history.push('/cart');
  }
}

function* removeFromCart({ id }) {
  yield put(removeSuccess(id));
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.data[0].amount;

  if (amount > stockAmount) {
    showToast({ type: 'error', message: 'Product QTY Out Stock', timer: 3000 });
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/REMOVE_REQUEST', removeFromCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);

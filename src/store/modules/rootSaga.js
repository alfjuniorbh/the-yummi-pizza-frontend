import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import checkout from './checkout/sagas';
import login from './login/sagas';

export default function* rootSaga() {
  return yield all([cart, checkout, login]);
}

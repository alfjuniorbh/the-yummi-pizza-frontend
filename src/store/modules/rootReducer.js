import { combineReducers } from 'redux';

import cart from './cart/reducer';
import checkout from './checkout/reducer';
import login from './login/reducer';

export default combineReducers({
  cart,
  checkout,
  login,
});

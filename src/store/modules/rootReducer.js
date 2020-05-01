import { combineReducers } from 'redux';

import cart from './cart/reducer';
import checkout from './checkout/reducer';

export default combineReducers({
  cart,
  checkout,
});

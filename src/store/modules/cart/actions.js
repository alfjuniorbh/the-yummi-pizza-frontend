export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function clearCart() {
  return {
    type: '@cart/CLEAR_CART',
  };
}

export function removeRequest(id) {
  return {
    type: '@cart/REMOVE_REQUEST',
    id: id,
  };
}
export function removeSuccess(id) {
  return {
    type: '@cart/REMOVE_SUCCESS',
    id: id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}

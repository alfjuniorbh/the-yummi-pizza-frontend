export function addCheckoutRequest(order) {
  return {
    type: '@checkout/ADD_REQUEST',
    order,
  };
}

export function addCheckoutSuccess(order) {
  return {
    type: '@checkout/ADD_SUCCESS',
    order,
  };
}

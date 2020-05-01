import produce from 'immer';

export default function checkout(state = [], action) {
  switch (action.type) {
    case '@checkout/ADD_SUCCESS':
      return produce(state, (draft) => {
        const { order } = action;
        draft.push(order);
      });
    default:
      return state;
  }
}

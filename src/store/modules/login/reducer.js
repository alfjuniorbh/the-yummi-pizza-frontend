import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  user: null,
  signed: false,
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.signed = true;
      });
    case '@auth/ADD_SUCCESS':
      return produce(state, (draft) => {
        const { order } = action;
        draft.push(order);
      });
    case '@auth/SIGN_OUT':
      return produce(state, (draft) => {
        draft.token = null;
        draft.signed = false;
      });
    default:
      return state;
  }
}

import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  roles: [],
  permissions: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST':
        draft.loading = true;
        break;
      case '@auth/SIGN_IN_SUCCESS':
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      case '@auth/SIGN_FAILURE':
        draft.loading = false;
        break;
      case '@auth/SIGN_OUT':
        // draft.token = null;
        // draft.signed = false;
        Object.assign(draft, INITIAL_STATE);
        break;
      case '@auth/SIGN_UP_REQUEST':
        draft.loading = true;
        break;
      case '@auth/GET_PERMISSIONS_SUCCESS':
        draft.permissions = action.payload.permissions;
        draft.roles = action.payload.roles;
        break;
      default:
    }
  });
}

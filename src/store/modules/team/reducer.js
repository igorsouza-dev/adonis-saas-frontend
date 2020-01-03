import { produce } from 'immer';

const INITIAL_STATE = {
  teams: [],
  loading: false,
};

export default function team(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@team/GET_TEAMS_REQUEST':
        draft.loading = true;
        break;
      case '@team/GET_TEAMS_SUCCESS':
        draft.teams = action.payload.teams;
        draft.loading = false;
        break;
      case '@team/GET_TEAMS_FAILURE':
        draft.loading = false;
        break;
      default:
    }
  });
}

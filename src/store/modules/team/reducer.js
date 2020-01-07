import { produce } from 'immer';

const INITIAL_STATE = {
  teams: [],
  activeTeam: null,
  loading: false,
  teamModalOpen: false,
};

export default function team(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_OUT':
        Object.assign(draft, INITIAL_STATE);
        break;
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
      case '@team/SELECT_TEAM':
        draft.activeTeam = action.payload.activeTeam;
        break;
      case '@team/OPEN_MODAL':
        draft.teamModalOpen = true;
        break;
      case '@team/CLOSE_MODAL':
        draft.teamModalOpen = false;
        break;
      case '@team/CREATE_TEAM_SUCCESS':
        draft.teams = [...state.teams, action.payload.team];
        break;
      default:
    }
  });
}

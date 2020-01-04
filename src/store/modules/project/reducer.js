import { produce } from 'immer';

const INITIAL_STATE = {
  projects: [],
  loading: false,
};

export default function team(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@project/GET_PROJECTS_REQUEST':
        draft.loading = true;
        break;
      case '@project/GET_PROJECTS_SUCCESS':
        draft.projects = action.payload.projects;
        draft.loading = false;
        break;
      case '@project/GET_PROJECTS_FAILURE':
        draft.loading = false;
        break;

      default:
    }
  });
}

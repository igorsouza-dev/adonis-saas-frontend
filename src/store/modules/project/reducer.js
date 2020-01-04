import { produce } from 'immer';

const INITIAL_STATE = {
  projects: [],
  loading: false,
  projectModalOpen: false,
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
      case '@project/OPEN_MODAL':
        draft.projectModalOpen = true;
        break;
      case '@project/CLOSE_MODAL':
        draft.projectModalOpen = false;
        break;
      case '@project/CREATE_PROJECT_SUCCESS':
        draft.projects = [...state.projects, action.payload.project];
        break;
      default:
    }
  });
}

import { produce } from 'immer';

const INITIAL_STATE = {
  members: [],
  loading: false,
  memberModalOpen: false,
};

export default function team(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@member/GET_MEMBERS_REQUEST':
        draft.loading = true;
        break;
      case '@member/GET_MEMBERS_SUCCESS':
        draft.members = action.payload.members;
        draft.loading = false;
        break;
      case '@member/GET_MEMBERS_FAILURE':
        draft.loading = false;
        break;
      case '@member/OPEN_MODAL':
        draft.memberModalOpen = true;
        break;
      case '@member/CLOSE_MODAL':
        draft.memberModalOpen = false;
        break;
      case '@member/UPDATE_MEMBER_ROLES_REQUEST':
        draft.members = state.members.map(member =>
          member.id === action.payload.memberId
            ? { ...member, roles: action.payload.roles }
            : member
        );
        draft.roles = action.payload.roles;
        draft.memberId = action.payload.memberId;
        break;
      default:
    }
  });
}

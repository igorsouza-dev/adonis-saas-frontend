export function getMembersRequest() {
  return {
    type: '@member/GET_MEMBERS_REQUEST',
  };
}
export function getMembersSuccess(members) {
  return {
    type: '@member/GET_MEMBERS_SUCCESS',
    payload: { members },
  };
}

export function openModal() {
  return {
    type: '@member/OPEN_MODAL',
    payload: { memberModalOpen: true },
  };
}

export function closeModal() {
  return {
    type: '@member/CLOSE_MODAL',
    payload: { memberModalOpen: false },
  };
}

export function getTeamsRequest() {
  return {
    type: '@team/GET_TEAMS_REQUEST',
  };
}
export function getTeamsSuccess(teams) {
  return {
    type: '@team/GET_TEAMS_SUCCESS',
    payload: { teams },
  };
}

export function getTeamsFailure() {
  return {
    type: '@team/GET_TEAMS_FAILURE',
  };
}

export function selectTeam(activeTeam) {
  return {
    type: '@team/SELECT_TEAM',
    payload: { activeTeam },
  };
}
export function openModal() {
  return {
    type: '@team/OPEN_MODAL',
    payload: { teamModalOpen: true },
  };
}

export function closeModal() {
  return {
    type: '@team/CLOSE_MODAL',
    payload: { teamModalOpen: false },
  };
}

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

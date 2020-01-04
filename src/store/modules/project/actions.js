export function getProjectsRequest() {
  return {
    type: '@project/GET_PROJECTS_REQUEST',
  };
}
export function getProjectsSuccess(projects) {
  return {
    type: '@project/GET_PROJECTS_SUCCESS',
    payload: { projects },
  };
}

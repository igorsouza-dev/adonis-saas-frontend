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
export function getProjectsFailure() {
  return {
    type: '@project/GET_PROJECTS_FAILURE',
  };
}
export function createProjectRequest(title) {
  return {
    type: '@project/CREATE_PROJECT_REQUEST',
    payload: { title },
  };
}
export function createProjectSuccess(project) {
  return {
    type: '@project/CREATE_PROJECT_SUCCESS',
    payload: { project },
  };
}
export function openModal() {
  return {
    type: '@project/OPEN_MODAL',
    payload: { projectModalOpen: true },
  };
}

export function closeModal() {
  return {
    type: '@project/CLOSE_MODAL',
    payload: { projectModalOpen: false },
  };
}

export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      password,
    },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
export function getPermissionsRequest() {
  return {
    type: '@auth/GET_PERMISSIONS_REQUEST',
  };
}
export function getPermissionsSuccess(roles, permissions) {
  return {
    type: '@auth/GET_PERMISSIONS_SUCCESS',
    payload: {
      roles,
      permissions,
    },
  };
}

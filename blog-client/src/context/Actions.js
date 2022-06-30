export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const UserUpdateStart = (userCredentials) => ({
  type: "USERUPDATE_START",
});

export const UserUpdateSuccess = (user) => ({
  type: "USERUPDATE_SUCCESS",
  payload: user,
});

export const UserUpdateFailure = () => ({
  type: "USERUPDATE_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

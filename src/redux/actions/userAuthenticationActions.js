export const userLoginStarted = (data) => ({
	type: "USER_LOGIN_STARTED",
	payload: data,
});

export const userLoginSuccess = (data) => ({
	type: "USER_LOGIN_SUCCESS",
	payload: data,
});

export const userLoginFailed = (data) => ({
	type: "USER_LOGIN_FAILED",
	payload: data,
});

export const userLogoutStarted = (data) => ({
	type: "USER_LOGOUT_STARTED",
	payload: data,
});

export const userLogoutSuccess = (data) => ({
	type: "USER_LOGOUT_SUCCESS",
	payload: data,
});

export const userLogoutFailed = (data) => ({
	type: "USER_LOGOUT_FAILED",
	payload: data,
});

export const authenticateUser = (data) => ({
	type: "AUTHENTICATE_USER",
	payload: data,
});

export const resetData = () => ({
	type: "RESET_DATA",
});

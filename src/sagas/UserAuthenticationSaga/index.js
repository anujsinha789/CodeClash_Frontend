/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";
import {
	userLoginStarted,
	userLoginSuccess,
	userLoginFailed,
} from "../../redux/actions/userAuthenticationActions";

const callApi = (data) => {
	const bodyFormData = new FormData();
	bodyFormData.append("email", data.email);
	bodyFormData.append("password", data.password);
	return axios({
		method: "post",
		url: "http://localhost:8080/api/v1/authenticateUser",
		data: bodyFormData,
		headers: { "Content-Type": "multipart/form-data" },
	});
};

function* handleAuthenticateUserStartEvents(action) {
	try {
		yield put(userLoginStarted());
		yield delay(2000);
		const response = yield call(callApi, action.payload);
		if (response.data.isAuthenticated) {
			yield put(userLoginSuccess(response.data));
		} else yield put(userLoginFailed());
	} catch (err) {
		yield put(loginUserFailed());
	}
}

export function* watchForAuthenticateUserStartEvents() {
	yield takeLatest("AUTHENTICATE_USER", handleAuthenticateUserStartEvents);
}

/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";
import {
	fetchAccountDetailsStarted,
	fetchAccountDetailsSuccess,
	fetchAccountDetailsFailed,
} from "../../redux/actions/accountDetailActions";

const callApi = (data) => {
	const bodyFormData = new FormData();
	bodyFormData.append("userId", data.userId);
	bodyFormData.append("username", data.username);
	return axios({
		method: "post",
		url: "http://localhost:4000/getAccountDetails",
		data: bodyFormData,
		headers: { "Content-Type": "multipart/form-data" },
	});
};

function* handleFetchAccountDetailsStartEvents(action) {
	try {
		yield put(fetchAccountDetailsStarted());
		yield delay(2000);
		const response = yield call(callApi, action.payload);
		if (response.data.success) {
			yield put(fetchAccountDetailsSuccess(response.data));
		} else yield put(fetchAccountDetailsFailed());
	} catch (err) {
		yield put(fetchAccountDetailsFailed());
	}
}

export function* watchForAuthenticateUserStartEvents() {
	yield takeLatest("FETCH_ACCOUNT_DETAILS", handleFetchAccountDetailsStartEvents);
}

import { all, fork } from "redux-saga/effects";
import * as UserAuthenticationSaga from "./UserAuthenticationSaga";

export default function* rootSaga() {
	yield all([...Object.values(UserAuthenticationSaga)].map(fork));
}

import { createReducer } from "../utils";

const initialState = {
	userId: "", // number
	name: "", // String
	dob: "", // Date
	age: "", // number
	lastLogin: "", // date-time
	memberSince: "", // Date
	username: "", // alphanumeric
	userRole: "", // String
	loading: false, // boolean
	error: false, // boolean
};

export default createReducer(initialState, {
	FETCH_ACCOUNT_DETAILS_STARTED: (state) => ({
		...state,
		loading: true,
		error: false,
	}),
	FETCH_ACCOUNT_DETAILS_SUCCESS: (state, payload) => ({
		...state,
		userId: payload.userId, // number
		name: payload.name, // String
		dob: payload.dob, // Date
		age: payload.age, // number
		lastLogin: payload.lastLogin, // date-time
		memberSince: payload.memberSince, // Date
		username: payload.username, // alphanumeric
		userRole: payload.userRole, // String
		loading: false, // boolean
		error: false,
	}),
	FETCH_ACCOUNT_DETAILS_FAILED: (state) => ({
		...state,
		loading: false,
		error: true,
	}),
	RESET_DATA: (state) => ({
		...state,
		userId: "",
		name: "",
		dob: "",
		age: "",
		lastLogin: "",
		memberSince: "",
		username: "",
		userRole: "",
		loading: false,
		error: false,
	}),
});

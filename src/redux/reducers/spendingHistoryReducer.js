// TODO : ADD state varibles relevent for spending History data.
import { createReducer } from "../utils";

const initialState = {
	userId: "", // number
	username: "", // alphanumeric
	loginTime: null, // date-time
	loginDate: null, // date-time
	userRole: "", // String
	loading: false, // boolean
	isAuthenticated: false, // boolean
	loginError: false,
};

export default createReducer(initialState, {
	USER_LOGIN_STARTED: (state) => ({
		...state,
		loading: true,
		isAuthenticated: false,
		loginError: false,
	}),
	USER_LOGIN_SUCCESS: (state, payload) => ({
		...state,
		userId: payload.userId,
		username: payload.username,
		loginTime: new Date(),
		loginDate: new Date(),
		loading: false,
		userRole: payload.userRole,
		isAuthenticated: true,
		loginError: false,
	}),
	USER_LOGIN_FAILED: (state) => ({
		...state,
		username: "",
		userId: "",
		loading: false,
		loginTime: null,
		loginDate: null,
		userRole: "",
		isAuthenticated: false,
		loginError: true,
	}),
	RESET_DATA: (state) => ({
		...state,
		userId: "",
		username: "",
		loginTime: null,
		loginDate: null,
		userRole: "",
		loading: false,
		isAuthenticated: false,
		loginError: false,
	}),
});

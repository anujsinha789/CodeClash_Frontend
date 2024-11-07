export const fetchAccountDetailsStarted = (data) => ({
	type: "FETCH_ACCOUNT_DETAILS_STARTED",
	payload: data,
});

export const fetchAccountDetailsSuccess = (data) => ({
	type: "FETCH_ACCOUNT_DETAILS_SUCCESS",
	payload: data,
});

export const fetchAccountDetailsFailed = (data) => ({
	type: "FETCH_ACCOUNT_DETAILS_FAILED",
	payload: data,
});

export const fetchAccountDetails = (data) => ({
	type: "FETCH_ACCOUNT_DETAILS",
	payload: data,
});

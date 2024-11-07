export const fetchUserSpendingHistoryStarted = (data) => ({
	type: "FETCH_USER_SPENDING_HISTORY_STARTED",
	payload: data,
});

export const fetchUserSpendingHistorySuccess = (data) => ({
	type: "FETCH_USER_SPENDING_HISTORY_SUCCESS",
	payload: data,
});

export const fetchUserSpendingHistoryFailed = (data) => ({
	type: "FETCH_USER_SPENDING_HISTORY_FAILED",
	payload: data,
});

export const fetchUserSpendingHistory = (data) => ({
	type: "FETCH_USER_SPENDING_HISTORY",
	payload: data,
});

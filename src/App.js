/* eslint-disable arrow-body-style */
import "./App.css";
import React from "react";
import { useDispatch } from "react-redux";
import Main from "./routes/index";
import { resetData } from "./redux/actions/userAuthenticationActions";

// TODO : Find another suitable way to reset login state if the request take longer duration to complete.
function App() {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(resetData());
		return () => {
			dispatch(resetData());
		};
	});
	return (
		<div className="App">
			<Main />
		</div>
	);
}

export default App;

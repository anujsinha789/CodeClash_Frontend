/* eslint-disable arrow-body-style */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Dashboard from "../screens/dashboard";
import LandingPage from "../screens/LandingPage/index";

const Main = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/signup" element={<Signup />}></Route>
			<Route path="/userDashboard" element={<Dashboard />}></Route>
		</Routes>
	);
};

export default Main;

/* eslint-disable arrow-body-style */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Dashboard from "../screens/Dashboard";
import LandingPage from "../screens/LandingPage/index";
import Features from "../screens/LandingPage/Feature";
import CodingPlayground from "../screens/CodePlayground";

const Main = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/signup" element={<Signup />}></Route>
			<Route path="/userDashboard" element={<Dashboard />}></Route>
			<Route path="/codePlayground" element={<CodingPlayground />}></Route>
		</Routes>
	);
};

export default Main;

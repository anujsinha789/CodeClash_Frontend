import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PaymentIcon from "@material-ui/icons/Payment";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import Tile from "./tile";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#42a5f5",
	},
	sidebar_header_container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "20%",
		width: "100%",
		background: "none",
	},
	avatar_container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "70px",
		width: "70px",
		borderRadius: "50% !important",
		background: "#f5f5f5",
	},
	username_container: {
		height: "20%",
		width: "50%",
		fontFamily: "consolas",
		fontSize: "1rem",
		fontWeight: "bold",
		color: "#ffebee",
		textAlign: "center",
		background: "none",
	},
	navigationBarContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "65%",
		width: "100%",
		backgroundColor: "none",
	},
	sidebar_footer_container: {
		display: "flex",
		height: "15%",
		width: "100%",
	},
	logout_btn_container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "50%",
	},
	logout_btn_card: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "60%",
		width: "60%",
		background: "#263238",
	},
	settings_btn_container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "50%",
	},
	settings_btn_card: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "60%",
		width: "60%",
		background: "#263238",
	},
}));

export default function Sidebar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.sidebar_header_container}>
				<div className={classes.avatar_container}>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
				</div>
				<div className={classes.username_container}>Anuj Sinha</div>
			</div>
			<div className={classes.navigationBarContainer}>
				<Tile hover icon={DashboardIcon} value="Dashboard" />
				<Tile hover icon={MonetizationOnIcon} value="Budget" expanded />
				<Tile hover icon={PaymentIcon} value="Transactions" expanded />
				<Tile hover icon={AccountBalanceIcon} value="Account Balance" expanded />
			</div>
			<div className={classes.sidebar_footer_container}>
				<div className={classes.logout_btn_container}>
					<Card elevation={5} className={classes.logout_btn_card}>
						<LogoutIcon style={{ color: "#fff" }} />
					</Card>
				</div>
				<div className={classes.settings_btn_container}>
					<Card elevation={5} className={classes.settings_btn_card}>
						<SettingsIcon style={{ color: "#fff" }} />
					</Card>
				</div>
			</div>
		</div>
	);
}

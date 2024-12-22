import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../../components/BootstrapNavbar/index"
import Features from "./Feature"
import clsx from "clsx";
import "./style.css";
import Testimonials from "./Testimonials";
// import bgImg from "../assets/homepage_background.png";
// import logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
	root: {
		// height: "100vh",
		width: "100%",
		overflow: "auto",
		// background: `url(${bgImg})`,
		// backgroundPosition: "center",
		// backgroundSize: "cover",
		// backgroundRepeat: "no-repeat",
	},
	navbar: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "transparent",
		height: "10%",
	},
	tab_container: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		height: "100%",
		width: "70%",
		background: "transparent",
	},
	logo: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "15%",
		background: "transparent",
	},
	divider: {
		height: "30%",
		width: "0.5%",
		background: "black",
		borderRadius: "50px",
		margin: "0.5rem",
	},
	welcome_text_wrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "100%",
		height: "80vh",
		padding: "1rem",
		background: "transparent",
	},
	welcome_text_container: {
		display: "flex",
		flexDirection: "column",
		width: "50%",
		height: "30%",
		background: "transparent",
	},
	welcome_text: {
		fontSize: "3rem",
		fontFamily: "consolas",
		fontWeight: "bold",
	},
	app_name: {
		width: "50%",
		fontSize: "2.5rem",
		fontFamily: "consolas",
		fontWeight: "bold",
	},
	description_text_container: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "20%",
		paddingTop: "1rem",
		background: "transparent",
	},
	description_text: {
		width: "100%",
		fontSize: "1.75rem",
		fontFamily: "consolas",
		fontWeight: "bold",
	},
	get_started_btn_container: {
		width: "100%",
		background: "transparent",
	},
	feat_1_text_container: {
		display: "flex",
		flexDirection: "column",
		width: "50%",
		height: "30%",
	},
	feat_1_text: {
		fontSize: "3rem",
		fontFamily: "consolas",
		fontWeight: "bold",
	},
	get_started_btn: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "14vw",
		height: "7vh",
		padding: "0.35em",
		background: "#0288D1",
		color: "#fff",
		fontWeight: "bold",
		fontFamily: "consolas",
		fontSize: "1.25em",
		borderRadius: "50px",
		textDecoration : "none",
		"&:hover": {
			cursor: "pointer",
			textDecoration : "none",
			transition: "all 0.5s ease-in-out",
		},
	},
}));
// TODO : TO convert hardcoded color strings with theme constants.
// TODO : Fix the description text layout & add more styling to the navbar.
// TODO : Use Bootstrap navbar.
export default function Login() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Navbar />
			<div className="container-fluid banner">
				<div className={clsx("container-fluid", classes.welcome_text_wrapper)}>
					<div className={classes.welcome_text_container}>
						<span className={classes.welcome_text}>Welcome To</span>
						<span className={classes.app_name}>CodeClash!</span>
					</div>
					<div className={classes.description_text_container}>
						<span className={classes.description_text}>
							Compete, Code, Conquer
						</span>
					</div>
					<div className={classes.get_started_btn_container}>
						<Link to="/login">
							<div className={classes.get_started_btn}>Lets Compete!</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="container-fluid banner">
				<Features />
			</div>
			<div className="container-fluid banner">
				<Testimonials />
			</div>
		</div>
	);
}

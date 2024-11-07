import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import clsx from "clsx";
import "./style.css";
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
	about: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "50%",
		width: "10%",
		fontSize: "1.25rem",
		fontWeight: "bold",
		fontFamily: "consolas",
		background: "transparent",
		border: "none",
		borderRadius: "50px",
		"&:hover": {
			cursor: "pointer",
			background: "#42a5f5",
			transition: "all 0.5s ease-in-out",
		},
	},
	home: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "50%",
		width: "10%",
		fontSize: "1.25rem",
		fontWeight: "bold",
		fontFamily: "consolas",
		background: "transparent",
		border: "none",
		borderRadius: "50px",
		"&:hover": {
			cursor: "pointer",
			background: "#42a5f5",
			transition: "all 0.5s ease-in-out",
		},
	},
	product: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "50%",
		width: "10%",
		fontSize: "1.25rem",
		fontWeight: "bold",
		background: "transparent",
		fontFamily: "consolas",
		border: "none",
		borderRadius: "50px",
		"&:hover": {
			cursor: "pointer",
			background: "#42a5f5",
			transition: "all 0.5s ease-in-out",
		},
	},
	pricing: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "50%",
		width: "10%",
		fontSize: "1.25rem",
		fontWeight: "bold",
		background: "transparent",
		fontFamily: "consolas",
		border: "none",
		borderRadius: "50px",
		"&:hover": {
			cursor: "pointer",
			background: "#42a5f5",
			transition: "all 0.5s ease-in-out",
		},
	},
	auth_btn_container: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		height: "100%",
		width: "30%",
		background: "transparent",
	},
	login: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		height: "100%",
		width: "30%",
		fontSize: "1.25rem",
		fontWeight: "bold",
		fontFamily: "consolas",
		background: "none",
	},
	divider: {
		height: "30%",
		width: "0.5%",
		background: "black",
		borderRadius: "50px",
		margin: "0.5rem",
	},
	signup: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		height: "100%",
		width: "30%",
		fontSize: "1.25rem",
		fontWeight: "bold",
		fontFamily: "consolas",
	},
	container: {
		display: "flex",
		flexDirection: "column",
		height: "90%",
		width: "50%",
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
		"&:hover": {
			cursor: "pointer",
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
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/login">
									Login
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{/* <div className={classes.navbar}>
				<div className={classes.tab_container}>
					<span className={classes.logo}>
						<img src={logo} alt="logo" height={140} />
					</span>
					<span className={classes.about}>
						<Link to="/about">About</Link>
					</span>
					<span className={classes.home}>
						<Link to="/home">Home</Link>
					</span>
					<span className={classes.product}>
						<Link to="/product">Product</Link>
					</span>
					<span className={classes.pricing}>
						<Link to="/pricing">Pricing</Link>
					</span>
				</div>
				<div className={classes.auth_btn_container}>
					<span className={classes.login}>
						<Link to="/login">Login</Link>
					</span>
					<span className={classes.divider} />
					<span className={classes.signup}>
						<Link to="/signup">Signup</Link>
					</span>
				</div>
			</div> */}
			<div className="container-fluid banner welcome">
				<div className={clsx("container-fluid", classes.welcome_text_wrapper)}>
					<div className={classes.welcome_text_container}>
						<span className={classes.welcome_text}>Welcome To</span>
						<span className={classes.app_name}>ManageMyBucks!</span>
					</div>
					<div className={classes.description_text_container}>
						<span className={classes.description_text}>
							Manage all your finances at one place!
						</span>
					</div>
					<div className={classes.get_started_btn_container}>
						<Link to="/login">
							<div className={classes.get_started_btn}>Get Started</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="container-fluid banner feat-1">
				<div className={clsx("container-fluid", classes.welcome_text_wrapper)}>
					<div className={classes.feat_1_text_container}>
						<span className={classes.feat_1_text}>
							Track and invest at Zero Commission!
						</span>
					</div>
					<div className={classes.description_text_container}>
						<span className={classes.description_text}>
							Manage all your finances at one place!
						</span>
					</div>
					<div className={classes.get_started_btn_container}>
						<Link to="/login">
							<div className={classes.get_started_btn}>Get Started</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="container-fluid banner feat-2">
				<div className={clsx("container-fluid", classes.welcome_text_wrapper)}>
					<div className={classes.feat_1_text_container}>
						<span className={classes.feat_1_text}>
							Track and invest at Zero Commission!
						</span>
					</div>
					<div className={classes.description_text_container}>
						<span className={classes.description_text}>
							Manage all your finances at one place!
						</span>
					</div>
					<div className={classes.get_started_btn_container}>
						<Link to="/login">
							<div className={classes.get_started_btn}>Get Started</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

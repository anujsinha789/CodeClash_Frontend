import React from "react";
// import Paper from "@mui/material/Paper";
import { Button, Checkbox, makeStyles } from "@material-ui/core";
import { Card } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "flex-end",
		height: "100%",
		width: "100%",
	},
	vectorArtContainer: {
		width: "50%",
		height: "100vh",
		background: "#42a5f5",
	},
	loginFormContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "50%",
		height: "100vh",
		backgroundColor: "transparent",
	},
	third_party_auth_container: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100%",
		height: "15%",
		backgroundColor: "none",
	},
	formContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: "90%",
		width: "70%",
	},
	formHeader: {
		display: "flex",
		justifyContent: "space-between",
	},
	signinTextContainer: {
		padding: "0.75rem",
		fontFamily: "consolas",
		fontSize: "1.25rem",
		fontWeight: "bold",
	},
	createAccountPropmtContainer: {
		padding: "0.75rem",
		fontFamily: "roboto",
		fontSize: "1.0rem",
	},
	google_auth: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "50px",
		width: "50px",
		borderRadius: "50% !important",
		"&:hover": {
			cursor: "pointer",
			background: "#f44336",
			transition: "all 0.5s ease-in-out",
		},
	},
	facebook_auth: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "50px",
		width: "50px",
		borderRadius: "50% !important",
		"&:hover": {
			cursor: "pointer",
			background: "#0d47a1",
			transition: "all 0.5s ease-in-out",
		},
	},
	twitter_auth: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "50px",
		width: "50px",
		borderRadius: "50% !important",
		"&:hover": {
			cursor: "pointer",
			background: "#2196f3",
			transition: "all 0.5s ease-in-out",
		},
	},
	dividerContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	divider: {
		backgroundColor: "black",
		width: "45%",
		height: "0.5vh",
		borderRadius: "50px",
	},
	credentialInputContainer: {
		backgroundColor: "transparent",
		height: "35%",
		paddingTop: "1rem",
		paddingBottom: "1rem",
	},
	emailInput: {
		width: "100%",
		height: "10vh",
		marginBottom: "0.5rem",
		padding: "1rem",
		border: "1px solid black",
		fontFamily: "consolas",
		fontSize: "1.25rem",
		borderRadius: "10px !important",
	},
	passwordInput: {
		width: "100%",
		height: "10vh",
		marginTop: "0.5rem",
		padding: "1rem",
		border: "1px solid black",
		fontFamily: "consolas",
		fontSize: "1.25rem",
		borderRadius: "10px !important",
	},
	signInBtnContainer: {
		display: "flex",
		marginTop: "1rem",
		justifyContent: "space-between",
	},
	signinBtn: {
		background: "#3F51B5",
		color: "#fff",
		width: "20%",
		fontWeight: "bold",
		fontFamily: "consolas",
	},
	back_btn: {
		height: "10vh",
		width: "30vw",
		background: "red",
	},
}));
// TODO : TO convert hardcoded color strings with theme constants.
export default function Login() {
	const classes = useStyles();
	const [checked, setChecked] = React.useState(false);
	return (
		<div className={classes.root}>
			<div className={classes.vectorArtContainer}>
				{/* <img src="../assets/authentication-page-img.png" alt="" /> */}
			</div>
			<div className={classes.loginFormContainer}>
				{/* <div className={classes.back_btn}></div> */}
				<div className={classes.formContainer}>
					<div className={classes.formHeader}>
						<span className={classes.signinTextContainer}>Register</span>
						<span className={classes.createAccountPropmtContainer}>
							or{" "}
							<a href="/" target="_blank">
								Login
							</a>
						</span>
					</div>
					<div className={classes.third_party_auth_container}>
						<Card elevation={2} className={classes.google_auth}>
							<GoogleIcon />
						</Card>
						<Card elevation={2} className={classes.facebook_auth}>
							<FacebookIcon />
						</Card>
						<Card elevation={2} className={classes.twitter_auth}>
							<TwitterIcon />
						</Card>
					</div>
					<div className={classes.dividerContainer}>
						<div className={classes.divider} />
						<span>OR</span>
						<div className={classes.divider} />
					</div>
					<div className={classes.credentialInputContainer}>
						<form
							className={classes.loginForm}
							action="http://localhost:4000/registerUser.do"
							method="POST"
						>
							<input
								className={classes.emailInput}
								name="Name"
								placeholder="Name"
								type="text"
								required="true"
							/>
							<input
								className={classes.emailInput}
								name="userName"
								placeholder="Email"
								type="Email"
								required="true"
							/>
							<input
								className={classes.passwordInput}
								name="password"
								placeholder="Password"
								type="password"
								required="true"
							/>
							<div className={classes.signInBtnContainer}>
								<div className={classes.rememeberMeCheckbox}>
									<Checkbox
										checked={checked}
										onChange={() => {
											setChecked(() => !checked);
										}}
										inputProps={{ "aria-label": "Remember Me" }}
										sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
										style={{ color: "black" }}
									/>
									Remember Me
								</div>
								<Button className={classes.signinBtn} type="submit">
									Sign In
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

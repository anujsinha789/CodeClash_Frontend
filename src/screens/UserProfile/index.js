import React from "react";
import { makeStyles } from "@material-ui/core";
import "./style.css";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		overflow: "auto",
	},
	
}));
// TODO : TO convert hardcoded color strings with theme constants.
// TODO : Fix the description text layout & add more styling to the navbar.
// TODO : Use Bootstrap navbar.
export default function UserProfile() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			
		</div>
	);
}

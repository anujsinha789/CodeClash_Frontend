import React from "react";
import { Typography, Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "95%",
		height: "95%",
	},
	budgetCard: {
		padding: "0.75rem",
		width: "100%",
		height: "100%",
		background: "#1A3146",
	},
	budgetTypography: {
		color: "#ffffff",
		fontFamily: "consolas",
	},
	cardBody: {
		width: "100%",
		height: "75%",
		background: "#fff",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
	},
}));
// TODO : ADD HIGHCHARTS ON THE CARD BODY
function budgetDisplay() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Card elevation={10} className={classes.budgetCard}>
				<div className={classes.cardHeader}>
					<Typography variant="h6" className={classes.budgetTypography}>
						Budget
					</Typography>
				</div>
				<div className={classes.cardBody}></div>
			</Card>
		</div>
	);
}

export default budgetDisplay;

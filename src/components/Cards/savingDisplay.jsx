import React from "react";
import { Typography, Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "95%",
		height: "95%",
	},
	savingCard: {
		padding: "0.75rem",
		width: "100%",
		height: "100%",
		background: "#1A3146",
	},
	savingsTypography: {
		color: "#ffffff",
		fontFamily: "consolas",
	},
	cardBody: {
		width: "100%",
		height: "90%",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		background: "transparent",
	},
	savingsDisplay: {
		width: "30%",
		height: "60%",
		background: "#fff",
	},
}));

function savingDisplay() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Card elevation={10} className={classes.savingCard}>
				<div className={classes.cardHeader}>
					<Typography variant="h6" className={classes.savingsTypography}>
						Savings
					</Typography>
				</div>
				<div className={classes.cardBody}>
					<Card elevation={10} className={classes.savingsDisplay}>
						<div className={classes.header}>Lorem Ipsem</div>
						<div className={classes.amountDisplay}>$400K</div>
						<div className={classes.progressBarContainer}>#######</div>
					</Card>
					<Card elevation={10} className={classes.savingsDisplay}>
						<div className={classes.header}>Lorem Ipsem</div>
						<div className={classes.amountDisplay}>$400K</div>
						<div className={classes.progressBarContainer}>#######</div>
					</Card>
					<Card elevation={10} className={classes.savingsDisplay}>
						<div className={classes.header}>Lorem Ipsem</div>
						<div className={classes.amountDisplay}>$400K</div>
						<div className={classes.progressBarContainer}>#######</div>
					</Card>
				</div>
			</Card>
		</div>
	);
}

export default savingDisplay;

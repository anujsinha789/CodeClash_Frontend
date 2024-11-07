import React from "react";
import { Typography, Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "95%",
		height: "95%",
	},
	transactionCard: {
		padding: "0.75rem",
		width: "100%",
		height: "100%",
		background: "#1A3146",
	},
	transactionTypography: {
		color: "#ffffff",
		fontFamily: "consolas",
	},
	cardBody: {
		width: "100%",
		height: "90%",
		background: "transparent",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
	},
	transactionTile: {
		width: "90%",
		height: "30%",
		background: "#fff",
	},
}));
function transactionDisplay() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Card elevation={10} className={classes.transactionCard}>
				<div className={classes.cardHeader}>
					<Typography variant="h6" className={classes.transactionTypography}>
						Transaction History
					</Typography>
				</div>
				<div className={classes.cardBody}>
					<Card elevation={10} className={classes.transactionTile}></Card>
					<Card elevation={10} className={classes.transactionTile}></Card>
					<Card elevation={10} className={classes.transactionTile}></Card>
				</div>
			</Card>
		</div>
	);
}

export default transactionDisplay;

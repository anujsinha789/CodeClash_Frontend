import React from "react";
import { Typography, Card, makeStyles } from "@material-ui/core";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PaidIcon from "@mui/icons-material/Paid";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "95%",
		height: "95%",
	},
	spendingCard: {
		padding: "0.75rem",
		width: "100%",
		height: "100%",
		background: "#1A3146",
	},
	spendingTypography: {
		color: "#ffffff",
		fontFamily: "consolas",
	},
	cardHeader: {
		display: "flex",
		justifyContent: "space-between",
	},
	display_module: {
		width: "100%",
		height: "85%",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		background: "none",
	},
	expenseDisplay: {
		width: "25%",
		height: "75%",
		borderRadius: "10px",
		background: "#fff",
	},
	netRevenueDisplay: {
		width: "25%",
		height: "75%",
		borderRadius: "10px",
		background: "#fff",
	},
	revenueDisplay: {
		width: "25%",
		height: "75%",
		borderRadius: "10px",
		background: "#fff",
	},
	icon_container: {
		width: "100%",
		height: "30%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "none",
	},
	value_container: {
		width: "100%",
		height: "40%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "none",
		fontSize: "2.25vw",
		fontFamily: "consolas",
		fontWeight: "bold",
	},
	text_container: {
		width: "100%",
		height: "30%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "none",
		fontSize: "1.5vw",
		fontFamily: "consolas",
		fontWeight: "bold",
	},
	chart_toggle_container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		height: "80%",
		width: "10%",
		background: "transparent",
	},
	expense_card_toggle: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "50%",
		height: "45px",
		width: "45px",
		background: "transparent",
	},
	expense_chart_toggle: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "50%",
		height: "45px",
		width: "45px",
		background: "transparent",
	},
}));

const iconStyle = {
	width: "2.0vw",
	height: "5.0vh",
};

function spendingDisplay() {
	const classes = useStyles();
	const [month, setMonth] = React.useState("");
	const [selected, setSelected] = React.useState("CARD");

	const handleChange = (event) => {
		setMonth(event.target.value);
	};
	return (
		<div className={classes.root}>
			<Card elevation={10} className={classes.spendingCard}>
				<div className={classes.cardHeader}>
					<Typography variant="h6" className={classes.spendingTypography}>
						Spending History
					</Typography>
					<FormControl sx={{ m: 1, minWidth: 220 }} size="small">
						<InputLabel id="demo-select-small">Month</InputLabel>
						<Select
							labelId="demo-select-small"
							id="demo-select-small"
							value={month}
							label="Month"
							onChange={handleChange}
						>
							<MenuItem value="Jan">January</MenuItem>
							<MenuItem value="Feb">Feburary</MenuItem>
							<MenuItem value="Mar">March</MenuItem>
							<MenuItem value="Apr">April</MenuItem>
							<MenuItem value="May">May</MenuItem>
							<MenuItem value="June">June</MenuItem>
							<MenuItem value="July">July</MenuItem>
							<MenuItem value="Aug">August</MenuItem>
							<MenuItem value="Sept">September</MenuItem>
							<MenuItem value="Oct">October</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className={classes.display_module}>
					<Card elevation={10} className={classes.expenseDisplay}>
						<div className={classes.icon_container}>
							<ReceiptLongIcon style={iconStyle} />
						</div>
						<div className={classes.value_container}>-$25000</div>
						<div className={classes.text_container}>Expenses</div>
					</Card>
					<Card elevation={10} className={classes.netRevenueDisplay}>
						<div className={classes.icon_container}>
							<PaidIcon style={iconStyle} />
						</div>
						<div className={classes.value_container}>$0</div>
						<div className={classes.text_container}>Net Revenue</div>
					</Card>
					<Card elevation={10} className={classes.revenueDisplay}>
						<div className={classes.icon_container}>
							<PaidIcon style={iconStyle} />
						</div>
						<div className={classes.value_container}>+$25000</div>
						<div className={classes.text_container}>Revenue</div>
					</Card>
					<Card elevation={0} className={classes.chart_toggle_container}>
						<Card elevation={5} className={classes.expense_card_toggle}>
							<PaidIcon style={iconStyle} />
						</Card>
						<Card elevation={5} className={classes.expense_chart_toggle}>
							<InsertChartIcon style={iconStyle} />
						</Card>
					</Card>
				</div>
			</Card>
		</div>
	);
}

export default spendingDisplay;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Sidebar from "../components/sidebar";
import SpendingDisplay from "../components/Cards/spendingDisplay";
import BudgetDisplay from "../components/Cards/budgetDisplay";
import SavingDisplay from "../components/Cards/savingDisplay";
import TransactionDisplay from "../components/Cards/transactionDisplay";
import Drawer from "../components/Drawer/drawer";
import { resetData } from "../redux/actions/userAuthenticationActions";
import PrimarySearchAppBar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		height: "100%",
		width: "100%",
		backgroundColor: "none",
		overflow: "hidden",
	},
	sidebarContainer: {
		height: "100%",
		width: "5%",
	},
	navbar: {
		width: "100%",
		height: "10%",
		background: "#fff",
	},
	dashboardDisplay: {
		width: "95%",
		height: "100vh",
	},
	leftContainer: {
		height: "90%",
		width: "70%",
		background: "red",
	},
	rightContainer: {
		height: "90%",
		width: "30%",
		background: "orange",
	},
	card_lyt_row1: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "45%",
		widht: "100%",
	},
	spending_disp_card_container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "70%",
	},
	budget_disp_card_container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "30%",
	},
	savings_disp_card_container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "60%",
		paddingLeft: "0.25rem",
		backgroundColor: "none",
	},
	transaction_disp_card_container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "30%",
		backgroundColor: "none",
	},
	card_lyt_row2: {
		display: "flex",
		height: "45%",
		widht: "100%",
		background: "none",
	},
}));
function Dashboard() {
	const classes = useStyles();
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(resetData());
		return () => {
			dispatch(resetData());
		};
	}, []);
	return (
		<div className={classes.root}>
			<div className={classes.sidebarContainer}>
				{/* <Sidebar /> */}
				<Drawer />
			</div>
			<div className={classes.dashboardDisplay}>
				<div className={classes.navbar}>{/* <PrimarySearchAppBar /> */}</div>
				<div className={classes.cardContainer}>
					<div className={classes.leftContainer}>
						{/* <div className={classes.card_lyt_row1}>
						<div className={classes.spending_disp_card_container}>
							<SpendingDisplay />
						</div>
					</div>
					<div className={classes.card_lyt_row2}>
						<div className={classes.savings_disp_card_container}>
							<SavingDisplay />
						</div>
						<div className={classes.budget_disp_card_container}>
							<BudgetDisplay />
						</div>
					</div> */}
					</div>
					<div className={classes.rightContainer}></div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;

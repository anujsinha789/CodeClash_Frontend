import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		width: "100%",
		backgroundColor: "#1976d2",
		overflow: "hidden",
	},
	drawerHeader: {
		height: "15%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	drawerContent: {
		height: "70%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
	},
	drawerFooter: {
		height: "15%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	listIconContainer: {
		width: "70%",
		height: "10%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "#fff",
		borderRadius: "5px",
	},
}));
export default function Drawer(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<div className={classes.drawerHeader}>
				<Avatar alt="Anuj Sinha" src="/static/images/avatar/1.jpg" />
			</div>
			<Divider />
			<List className={classes.drawerContent}>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<div className={classes.listIconContainer}>
						{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
					</div>
				))}
			</List>
			<Divider />
			<div className={classes.drawerFooter}>
				<SettingsIcon style={{ color: "#fff" }} />
			</div>
		</div>
	);
}

import React from "react";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// const HOVER_ELEVATION = 5;
// const NORMAL_ELEVATION = 3;

const useStyles = makeStyles((theme) => ({
	root: {
		height: "20%",
		width: "20vw",
		backgroundColor: "transparent",
	},
	tileExpanded: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		minWidth: "inherit",
		margin: "5%",
		height: "80%",
		backgroundColor: "transparent",
		"&:hover": {
			cursor: "pointer",
			background: "#455a64",
			transition: "ease-in 0.3s",
		},
	},
	tile: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		minWidth: "inherit",
		margin: "5%",
		height: "80%",
		backgroundColor: "transparent",
		"&:hover": {
			cursor: "pointer",
			background: "#455a64",
			transition: "ease-in 0.3s",
		},
	},
	iconContainer: {
		width: "30%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "none",
	},
	textContainer: {
		width: "70%",
		height: "100%",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		background: "none",
	},
}));

export default function Tile(props) {
	const classes = useStyles();
	const { hover, value, expanded } = props;
	const DisplayIcon = props.icon;
	return (
		<div className={classes.root}>
			<Card
				elevation={hover ? 5 : 2}
				className={expanded ? classes.tileExpanded : classes.tile}
			>
				<div className={classes.iconContainer}>
					<DisplayIcon style={{ width: "2vw", color: "#fff" }} />
				</div>
				{expanded && (
					<div className={classes.textContainer}>
						<span style={{ fontSize: "1.25vw", color: "#fff" }}>{value}</span>
					</div>
				)}
			</Card>
		</div>
	);
}

Tile.defaultProps = {
	hover: "false",
	value: "",
};

Tile.propTypes = {
	icon: PropTypes.node.isRequired,
	hover: PropTypes.bool,
	value: PropTypes.string,
	expanded: PropTypes.bool.isRequired,
};

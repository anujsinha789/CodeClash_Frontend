import React from "react";
import "./style.css";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Divider } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.grey[300], 0.25),
	"&:hover": {
		backgroundColor: alpha(theme.palette.grey[300], 0.35),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: theme.palette.primary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function PrimarySearchAppBar() {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow-sm">
			<div className="container-fluid">
				<a className="navbar-brand fw-bold text-secondary" href="/">
					CodeClash
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
					<div className="left-container">
						<ul className="navbar-nav me-auto"> 
							<li className="nav-item">
								<a className="nav-link text-primary fw-semibold" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-primary fw-semibold" href="/features">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-primary fw-semibold" href="/pricing">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-primary fw-semibold" href="/about">
									About
								</a>
							</li>
						</ul>
					</div>
					<div className="right-container">
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search…"
								inputProps={{ "aria-label": "search" }}
							/>
						</Search>
						<div className="d-flex">
							<a className="btn btn-outline-primary" href="/login" role="button">
								Login
							</a>
							<Divider style = {{backgroundColor : "black", marginLeft : "0.5em" , marginRight : "0.5em"}} orientation="vertical" variant="middle" flexItem />
							<a className="btn btn-primary" href="/signup" role="button">
								Signup
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}



import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import {
  Bar,
  Pie,
  Line,
} from "react-chartjs-2"; // Charts for graphical metrics
import "chart.js/auto";
import "./style.css";

const Dashboard = () => {
  // Dummy data for graphs
  const activityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Coding Hours",
        data: [2, 4, 3, 5, 6, 3, 4],
        backgroundColor: "rgba(2, 136, 209, 0.6)",
        borderColor: "#0288D1",
        borderWidth: 2,
      },
    ],
  };

  const winLossData = {
    labels: ["Wins", "Losses"],
    datasets: [
      {
        label: "Win/Loss Ratio",
        data: [60, 40],
        backgroundColor: ["#0288D1", "#FF5722"],
      },
    ],
  };

  const progressData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Problems Solved",
        data: [5, 8, 10, 15],
        backgroundColor: "rgba(76, 175, 80, 0.6)",
        borderColor: "#4CAF50",
        borderWidth: 2,
      },
    ],
  };

  return (
		<div className="parent-container">
			<Box>
				<Container >
					<Typography
						variant="h4"
						align="center"
						gutterBottom
						sx={{ fontWeight: "bold", color: "#0288D1", mb: 4 }}
					>
						Your Performance Dashboard
					</Typography>

					<Grid container spacing={4} >
						{/* Top Stats Cards */}
						<Grid item xs={12} sm={6} md={3}>
							<Card
								sx={{
									textAlign: "center",
									boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
								}}
							>
								<CardContent>
									<Typography variant="h6" sx={{ fontWeight: "bold" }}>
										Total Battles
									</Typography>
									<Typography
										variant="h4"
										sx={{ color: "#0288D1", fontWeight: "bold" }}
									>
										120
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6} md={3}>
							<Card
								sx={{
									textAlign: "center",
									boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
								}}
							>
								<CardContent>
									<Typography variant="h6" sx={{ fontWeight: "bold" }}>
										Ranking
									</Typography>
									<Typography
										variant="h4"
										sx={{ color: "#FF5722", fontWeight: "bold" }}
									>
										#15
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6} md={3}>
							<Card
								sx={{
									textAlign: "center",
									boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
								}}
							>
								<CardContent>
									<Typography variant="h6" sx={{ fontWeight: "bold" }}>
										Problems Solved
									</Typography>
									<Typography
										variant="h4"
										sx={{ color: "#4CAF50", fontWeight: "bold" }}
									>
										300
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6} md={3}>
							<Card
								sx={{
									textAlign: "center",
									boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
								}}
							>
								<CardContent>
									<Typography variant="h6" sx={{ fontWeight: "bold" }}>
										Win Rate
									</Typography>
									<Typography
										variant="h4"
										sx={{ color: "#0288D1", fontWeight: "bold" }}
									>
										75%
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						{/* Activity Graph */}
						<Grid item xs={12} md={6}>
							<Card sx={{ boxShadow: "0 4px 10px rgba(0,0,0,0.1)", height: "100vh" }}>
								<CardContent>
									<Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
										Weekly Coding Activity
									</Typography>
									<Bar data={activityData} />
								</CardContent>
							</Card>
						</Grid>

						{/* Win/Loss Ratio */}
						<Grid item xs={12} md={6}>
							<Card sx={{ boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
								<CardContent>
									<Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
										Win/Loss Ratio
									</Typography>
									<Pie data={winLossData} />
								</CardContent>
							</Card>
						</Grid>

						{/* Progress Over Time */}
						<Grid item xs={12}>
							<Card sx={{ boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
								<CardContent>
									<Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
										Progress Over Time
									</Typography>
									<Line data={progressData} />
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
  );
};

export default Dashboard;


import React from "react";
import { Container, Grid, Typography, Card, CardContent, Box } from "@mui/material";
import { Code, Leaderboard, ReportProblem, CodeOff, BarChart } from "@mui/icons-material";
import "./style.css";

const features = [
  {
    title: "Real-Time 1v1 Coding Battles",
    description: "Compete with peers in live coding challenges and test your skills in real-time.",
    icon: <Code style={{ fontSize: "3rem", color: "#0288D1" }} />,
  },
  {
    title: "Competitive Leaderboards",
    description: "Track your ranking on global and regional leaderboards to stay motivated.",
    icon: <Leaderboard style={{ fontSize: "3rem", color: "#0288D1" }} />,
  },
  {
    title: "Wide Range of Coding Problems",
    description: "Solve problems across various difficulty levels and programming topics.",
    icon: <ReportProblem style={{ fontSize: "3rem", color: "#0288D1" }} />,
  },
  {
    title: "Interactive IDE in the Browser",
    description: "Code directly in the browser with an intuitive and powerful IDE.",
    icon: <CodeOff style={{ fontSize: "3rem", color: "#0288D1" }} />,
  },
  {
    title: "Insights and Analytics on Performance",
    description: "Get detailed reports and analytics to understand your strengths and weaknesses.",
    icon: <BarChart style={{ fontSize: "3rem", color: "#0288D1" }} />,
  },
];

const Features = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 5 }} className = "features-container">
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#0288D1", mb: 3 }}
        >
          Why Choose Code Clash?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  height: "100%",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent>
                  {feature.icon}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#333" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;

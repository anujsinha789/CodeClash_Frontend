import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react"; // For interactive carousel
import 'swiper/css/bundle';
import { Pagination, Autoplay } from "swiper/modules"; // Import modules

// // Use Swiper modules
// Swiper.use([Pagination, Autoplay]);

const testimonials = [
  {
    name: "Jane Doe",
    feedback:
      "Code Clash transformed my coding journey! The real-time battles are thrilling, and the analytics helped me identify my strengths.",
    image: "https://via.placeholder.com/100", // Replace with real images
    designation: "Software Engineer at TechCorp",
  },
  {
    name: "John Smith",
    feedback:
      "I love competing with other developers. The leaderboard keeps me motivated, and the variety of coding problems is amazing!",
    image: "https://via.placeholder.com/100",
    designation: "Freelance Developer",
  },
  {
    name: "Alice Johnson",
    feedback:
      "The interactive browser IDE is a game-changer. It’s so intuitive, and I can practice anywhere without setting up an environment.",
    image: "https://via.placeholder.com/100",
    designation: "Student at Code University",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f5f5f5" }} className = "testimonials-container">
      <Container> 
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#0288D1", mb: 3 }}
        >
          What Our Users Say
        </Typography>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: "2rem" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  maxWidth: "600px",
                  margin: "0 auto",
                  textAlign: "center",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  padding: 3,
                  borderRadius: "15px",
                }}
              >
                <CardMedia
                  component="img"
                  image={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    margin: "0 auto",
                    mb: 2,
                  }}
                />
                <CardContent>
                  <Typography
                    sx={{ fontStyle: "italic", color: "#666", mb: 2 }}
                  >
                    "{testimonial.feedback}"
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#999", fontSize: "0.9rem" }}
                  >
                    {testimonial.designation}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;

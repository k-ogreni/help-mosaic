import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { ResponsiveAppBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const volunteeringTheme = createTheme({
  palette: {
    primary: {
      main: "#004D40",
    },
    secondary: {
      main: "#FF8C00",
    },
  },
});

const welcomeMessage = {
  title: "Welcome to HelpMosaic",
  description:
    "Join the Human Mosaic of Compassion and Impact. Discover meaningful ways to volunteer and make a difference.",
  text: "Get Started",
  link: "/signup",
};

const linkCards = [
  {
    title: "Volunteer Opportunities",
    description:
      "Explore various volunteer opportunities in your community and beyond.",
  },
  {
    title: "Impactful Stories",
    description:
      "Read inspiring stories from volunteers and individuals who have made a difference.",
  },
  {
    title: "Support a Cause",
    description:
      "Learn how you can support a cause that matters to you and contribute to positive change.",
  },
];

const testimonials = [
  {
    name: "John Doe",
    content:
      "HelpMosaic has provided me with incredible opportunities to give back to the community. I am grateful for the impact we've made together.",
  },
  {
    name: "Jane Smith",
    content:
      "Volunteering through HelpMosaic has been a rewarding experience. The platform makes it easy to find and contribute to causes that matter.",
  },
  {
    name: "Sam Altman",
    content:
      "Through volunteering I have found myself. HelpMosaic has been a big help in that!",
  },
  {
    name: "Bella Whitman",
    content:
      "I always dreamed of volunteering, and HelpMosaic has made it easier than ever!",
  },
];

export default function LandingPage() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowArrow(scrolled < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={volunteeringTheme}>
      <Box
        sx={{
          backgroundColor: "#1a1a1a",
          minHeight: "100vh",
          width: "100vw",
          paddingRight: 0,
          position: "relative",
        }}
      >
        <Container
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "100px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{ color: "#52c7b8", marginBottom: "20px" }}
            >
              {welcomeMessage.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#52c7b8", marginBottom: "10px" }}
            >
              {welcomeMessage.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={welcomeMessage.link}
              sx={{ marginTop: "20px", alignSelf: "center" }}
            >
              {welcomeMessage.text}
            </Button>
          </Box>
          <Card
            sx={{ maxWidth: "100%", borderRadius: "8px", marginBottom: "5px" }}
          >
            <CardMedia
              component="img"
              alt="Landing Page"
              height="auto"
              image="/landingpage.png"
            />
          </Card>
        </Container>
        {/* <Link
          to="exploreFeatures"
          smooth={true}
          duration={500}
          style={{
            position: "absolute",
            bottom: "15px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <KeyboardDoubleArrowDownIcon
            sx={{ width: "30px", cursor: "pointer" }}
          />
        </Link> */}
        <Container maxWidth="lg" sx={{ paddingY: "40px" }} id="exploreFeatures">
          <Typography
            variant="h4"
            sx={{ color: "#52c7b8", marginBottom: "20px" }}
          >
            Explore Our Features
          </Typography>
          <Grid container spacing={3}>
            {linkCards.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: "20px",
                    height: "100%",
                    backgroundColor: "#2c2c2c",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#FF8C00", marginBottom: "10px" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777777", marginBottom: "20px" }}
                  >
                    {feature.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      fontColor: "white",
                    }}
                  >
                    Learn More
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container maxWidth="lg" sx={{ paddingBottom: "40px" }}>
          <Typography
            variant="h4"
            sx={{ color: "#52c7b8", marginBottom: "20px" }}
          >
            What Our Volunteers Say
          </Typography>
          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    backgroundColor: "#2c2c2c",
                    height: "100%",
                    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#FF8C00",
                        marginBottom: "10px",
                        fontSize: "1.25rem",
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#777777" }}>
                      &ldquo;{testimonial.content}&rdquo;
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

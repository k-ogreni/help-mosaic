import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import BlogPost from "@/components/blogposts";
import { ResponsiveAppBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import ExpandableBlogPost from "@/components/expandableblogposts";

const volunteeringTheme = createTheme({
  palette: {
    primary: {
      main: "#004D40",
    },
    secondary: {
      main: "#FF8C00",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h2: {
      color: "#3CB371",
      marginBottom: "20px",
    },
  },
});

const expandablePosts = [
  {
    id: 1,
    title: "A Helping Hand",
    content:
      "In the heart of the community, Sarah found her calling in volunteering. Every weekend, she dedicated her time to local shelters, offering a helping hand to those in need. From serving meals to providing a warm smile, Sarah discovered the power of small gestures. One day, she met a struggling family who, with the support of the community, eventually found stability. Volunteering not only transformed the lives of others but also became a source of inspiration and fulfillment for Sarah.",
    image: "b1.jpg",
    date: "2023-11-01",
  },
  {
    id: 2,
    title: "Building Futures",
    content:
      "As part of a volunteer construction team, Mark contributed to building homes for families facing adversity. With a hammer in hand and determination in his heart, he witnessed the transformation of empty lots into thriving neighborhoods. Mark discovered the profound impact of collective effort, turning neglected spaces into places where dreams could take root. Through volunteering, he not only built homes but also fostered a sense of community and hope for a brighter future.",
    image: "b2.jpg",
    date: "2023-11-10",
  },
  {
    id: 3,
    title: "Caring for Our Elders",
    content:
      "Volunteering at a local nursing home, Emily formed meaningful connections with the elderly residents. Through shared stories and laughter, she realized the importance of companionship and kindness in the lives of those who had paved the way for future generations. Emily's volunteer work extended beyond practical assistance to become a source of joy and comfort for the elderly residents, highlighting the profound impact of compassion in creating a supportive community.",
    image: "b1.jpg",
    date: "2023-11-25",
  },
];

expandablePosts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

const blogPosts = [
  {
    id: 1,
    title: "The Impact of Volunteering",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "b1.jpg",
    date: "November 20, 2023",
  },
  {
    id: 2,
    title: "Volunteer Spotlight: John Doe",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "b2.jpg",
    date: "November 15, 2023",
  },
  {
    id: 1,
    title: "The Impact of Volunteering",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "b1.jpg",
    date: "November 20, 2023",
  },
  {
    id: 2,
    title: "Volunteer Spotlight: John Doe",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "b2.jpg",
    date: "November 15, 2023",
  },
];

const Blog = () => {
  return (
    <ThemeProvider theme={volunteeringTheme}>
      <Box
        sx={{
          backgroundColor: "#1a1a1a",
          minHeight: "100vh",
          width: "100vw",
          paddingRight: 0,
          paddingBottom: 5,
        }}
      >
        <ResponsiveAppBar />
        <Container
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#3CB371", marginBottom: "20px" }}
          >
            HelpMosaic's Blog
          </Typography>
          <Container
            sx={{
              marginTop: 5,
              marginBottom: 5,
              maxWidth: "800px", // Set the desired fixed width
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#3CB371", marginBottom: "20px" }}
            >
              Latest posts:
            </Typography>
            <Grid container spacing={4}>
              {expandablePosts.map((post) => (
                <Grid item key={post.id} xs={12} md={6} lg={4}>
                  <ExpandableBlogPost post={post} />
                </Grid>
              ))}
            </Grid>
          </Container>
          <Typography
            variant="h4"
            sx={{ color: "#3CB371", marginBottom: "20px" }}
          >
            Check out our older posts:
          </Typography>
          <Container
            sx={{
              maxWidth: "800px", // Set the desired fixed width
            }}
          >
            <Grid container spacing={3}>
              {blogPosts.map((post) => (
                <Grid item xs={12} md={6} key={post.id}>
                  <BlogPost post={post} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default Blog;

import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "@/components/footer";
import { ResponsiveAppBar } from "@/components/navbar";
import { styled } from "@mui/system";
import { Card, CardMedia } from "@mui/material";

const aboutUsTheme = createTheme({
  palette: {
    primary: {
      main: "#004D40",
    },
    secondary: {
      main: "#FF8C00",
    },
  },
});

const StyledPaper = styled(Paper)({
  padding: "20px",
  height: "80%",
  backgroundColor: "#2c2c2c",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const ImageContainer = styled("div")({
  marginBottom: "10px",
  borderRadius: "50%",
  overflow: "hidden",
  width: "150px",
  height: "280px",
  border: "3px solid #FF8C00",
});

const MemberImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMember> = ({
  name,
  role,
  description,
  imageUrl,
}) => (
  <StyledPaper elevation={3}>
    <ImageContainer>
      <MemberImage src={imageUrl} alt={name} />
    </ImageContainer>
    <Typography variant="h6" sx={{ color: "#FF8C00", marginBottom: "5px" }}>
      {name}
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{ color: "#777777", marginBottom: "5px" }}
    >
      {role}
    </Typography>
    <Typography variant="body2" sx={{ color: "#777777" }}>
      {description}
    </Typography>
  </StyledPaper>
);

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Co-Founder & CEO",
      description:
        "Passionate about community building and volunteerism, John is dedicated to creating positive change. With a background in social entrepreneurship, he brings a wealth of experience to HelpMosaic, driving our mission forward. John envisions a world where everyone is inspired to contribute, and he is committed to making volunteering accessible to all.",
      imageUrl: "/t2.jpg",
    },
    {
      name: "Jane Smith",
      role: "Co-Founder & CTO",
      description:
        "Tech enthusiast and problem solver, Jane ensures our platform is user-friendly and efficient. With a passion for innovation, she leads our technical team to deliver cutting-edge solutions for our community. Jane believes in the power of technology to drive social impact and is dedicated to creating a positive and seamless experience for our users.",
      imageUrl: "/t1.jpg",
    },
    {
      name: "Tim Brown",
      role: "Coordinator",
      description:
        "Passionate about community building and volunteerism, Tim is dedicated to creating positive change. His organizational skills and commitment make him an invaluable member of the HelpMosaic team. Tim believes in the strength of community collaboration and works tirelessly to connect volunteers with opportunities that align with their passions.",
      imageUrl: "/t2.jpg",
    },
  ];

  return (
    <ThemeProvider theme={aboutUsTheme}>
      <Box
        sx={{
          backgroundColor: "#1a1a1a",
          minHeight: "100vh",
          width: "100vw",
          paddingRight: 0,
          position: "relative",
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
            sx={{ color: "#52c7b8", marginBottom: "20px", textAlign: "center" }}
          >
            About Us
          </Typography>
          <StyledPaper elevation={3} sx={{ marginBottom: 2 }}>
            <Typography
              variant="body1"
              sx={{ color: "#777777", marginBottom: "20px" }}
            >
              Welcome to HelpMosaic, where volunteers and communities come
              together to make a positive impact. Our mission is to connect
              passionate individuals with meaningful opportunities, fostering a
              culture of giving and collaboration. At HelpMosaic, we believe
              that everyone has the power to make a difference. Whether you're
              passionate about education, environmental sustainability, or
              community development, we provide a platform to channel your
              energy into impactful actions. Join us in making a difference and
              building a better world together. Together, we can create a global
              community where everyone's efforts, regardless of scale,
              contribute to positive and lasting impact.
            </Typography>
          </StyledPaper>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  marginTop: 7.5,
                  maxHeight: "80%",
                }}
              >
                <CardMedia
                  component="img"
                  alt="Volunteering"
                  height="auto"
                  image="/community.png"
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  color: "#52c7b8",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Our Mission
              </Typography>
              <StyledPaper elevation={3}>
                <Typography
                  variant="body1"
                  sx={{ color: "#777777", marginBottom: "15px" }}
                >
                  At HelpMosaic, our mission is to create a world where
                  volunteering becomes a fundamental and enjoyable aspect of
                  community life. We are dedicated to building a platform that
                  empowers individuals and organizations, fostering connections
                  and collaboration to address social and environmental
                  challenges. Our vision goes beyond facilitating volunteer
                  opportunities; we aim to instill a sense of community,
                  encouraging a global movement where compassion and
                  collaboration drive meaningful change. <br /> <br /> By
                  joining HelpMosaic, you become part of a movement that
                  believes in the collective power of small actions. Our
                  platform serves as a nexus, connecting diverse volunteers with
                  organizations in need, maximizing the impact of every
                  contribution. We understand that building a better world
                  requires collective efforts, and HelpMosaic is committed to
                  being a catalyst for this positive change. Join us on this
                  transformative journey of compassion and collaboration.
                  Together, we can shape a future where every individual plays a
                  pivotal role in building a mosaic of support, leaving a legacy
                  of unity and positive change for generations to come.
                </Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  color: "#52c7b8",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Our Journey
              </Typography>
              <StyledPaper elevation={3}>
                <Typography
                  variant="body1"
                  sx={{ color: "#777777", marginBottom: "20px" }}
                >
                  HelpMosaic was born out of a shared vision among our founders,
                  John Doe and Jane Smith, who sought to make a lasting impact
                  on communities worldwide. Fueled by their passion for social
                  entrepreneurship and a desire to leverage technology for good,
                  they embarked on a journey to create a platform that would
                  connect volunteers with opportunities tailored to their skills
                  and interests. The journey involved overcoming challenges,
                  building a dedicated team, and collaborating with like-minded
                  individuals who shared the dream of creating positive change.
                  Today, HelpMosaic stands as a testament to the power of
                  community, collaboration, and the belief that small acts can
                  lead to significant impact. Join us on our journey as we
                  continue to evolve and expand, driven by the collective goal
                  of building a better world through the spirit of giving and
                  collaboration. <br /> <br /> As HelpMosaic stands today, it
                  serves as a living testament to the transformative power of
                  community and collaboration, emphasizing the belief that even
                  small acts can yield significant impact.
                </Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  marginTop: 7.5,
                  maxHeight: "80%",
                }}
              >
                <CardMedia
                  component="img"
                  alt="Volunteering"
                  height="auto"
                  image="/vol.png"
                />
              </Card>
            </Grid>
          </Grid>

          <Typography
            variant="h4"
            sx={{
              color: "#52c7b8",
              marginBottom: 5,
              textAlign: "center",
              marginTop: 5,
            }}
          >
            Meet Our Team
          </Typography>
          <Grid container spacing={3}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <TeamMemberCard {...member} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default AboutUsPage;

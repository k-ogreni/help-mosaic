import * as React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import { useRouter } from "next/router";
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Footer } from "@/components/footer";
import { ResponsiveAppBar } from "@/components/navbar";
import { useState } from "react";

const exploreOpportunitiesTheme = createTheme({
  palette: {
    primary: {
      main: "#004D40",
    },
    secondary: {
      main: "#FF8C00",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
} as Theme);

const opportunityDetails = [
  {
    title: "Education Programs",
    organization: "ABC Education Foundation",
    location: "City, Country",
    description:
      "Support educational initiatives and help shape the future. Assist in tutoring, organizing workshops, and curriculum development.",
    tasks: ["Tutoring", "Workshop organization", "Curriculum development"],
    peopleNeeded: 5,
  },
  {
    title: "Environmental Projects",
    organization: "Green Earth Society",
    location: "Various Locations",
    description:
      "Join efforts to protect and preserve the environment. Participate in tree planting, waste cleanup, and environmental education programs.",
    tasks: ["Tree planting", "Waste cleanup", "Environmental education"],
    peopleNeeded: 10,
  },
  {
    title: "Community Development",
    organization: "Community Builders Network",
    location: "Urban and Rural Areas",
    description:
      "Get involved in projects that uplift communities. Contribute to infrastructure development, community events, and social outreach.",
    tasks: [
      "Infrastructure development",
      "Community events",
      "Social outreach",
    ],
    peopleNeeded: 8,
  },
  {
    title: "Healthcare Initiatives",
    organization: "Health for All Foundation",
    location: "Local Clinics and Hospitals",
    description:
      "Contribute to healthcare programs and make a difference. Provide assistance in medical camps, awareness campaigns, and patient support.",
    tasks: ["Medical camps", "Awareness campaigns", "Patient support"],
    peopleNeeded: 12,
  },
  {
    title: "Art and Culture Events",
    organization: "Creative Arts Society",
    location: "City Cultural Centers",
    description:
      "Support and participate in local art and cultural events. Assist in organizing exhibitions, cultural festivals, and art workshops.",
    tasks: ["Organizing exhibitions", "Cultural festivals", "Art workshops"],
    peopleNeeded: 6,
  },
  {
    title: "Technology for Social Good",
    organization: "Tech4Good Foundation",
    location: "Tech Hub",
    description:
      "Use your tech skills to create positive social impact. Develop software, websites, and technology solutions for non-profit organizations.",
    tasks: ["Software development", "Website design", "Tech solutions"],
    peopleNeeded: 8,
  },
  {
    title: "Animal Welfare Programs",
    organization: "Animal Guardians Society",
    location: "Animal Shelters and Sanctuaries",
    description:
      "Help care for and protect animals in need. Volunteer in animal shelters, assist in rescue operations, and support awareness campaigns.",
    tasks: [
      "Animal shelter assistance",
      "Rescue operations",
      "Awareness campaigns",
    ],
    peopleNeeded: 15,
  },
  {
    title: "Food Security Projects",
    organization: "Food for All Initiative",
    location: "Community Kitchens",
    description:
      "Contribute to initiatives addressing food insecurity. Volunteer in community kitchens, distribute food packages, and support food drives.",
    tasks: ["Community kitchens", "Food package distribution", "Food drives"],
    peopleNeeded: 10,
  },
  {
    title: "Senior Companionship",
    organization: "Elder Companions Association",
    location: "Senior Care Facilities",
    description:
      "Provide companionship and support to seniors in your community. Engage in conversations, assist in recreational activities, and offer companionship.",
    tasks: [
      "Conversations with seniors",
      "Recreational activities",
      "Companionship",
    ],
    peopleNeeded: 4,
  },
];

const ExploreOpportunitiesPage = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [selectedOpportunityStyle, setSelectedOpportunityStyle] = useState({});

  const handleApplyClick = (title: string) => {
    setSelectedOpportunity(title);
    setOpenModal(true);

    const updatedStyles = {
      backgroundColor: "#FFA726",
      transform: "scale(1.05)",
    };

    setSelectedOpportunityStyle(updatedStyles);
  };

  const handleApplyFormSubmit = () => {
    alert("Submitting form...");
    setOpenModal(false);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <ThemeProvider theme={exploreOpportunitiesTheme}>
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
            Explore New Volunteer Opportunities
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#52c7b8", marginBottom: "40px", textAlign: "center" }}
          >
            Discover meaningful ways to contribute to your community.
          </Typography>
          <Grid container spacing={3} sx={{ marginBottom: 5 }}>
            {opportunityDetails.map((opportunity, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: "20px",
                    height: "100%",
                    backgroundColor: "#2c2c2c",
                    borderRadius: "16px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div>
                    <Typography
                      variant="h5"
                      sx={{ color: "#FF8C00", marginBottom: "10px" }}
                    >
                      {opportunity.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#777777", marginBottom: "10px" }}
                    >
                      <strong>Organization:</strong> {opportunity.organization}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#777777", marginBottom: "10px" }}
                    >
                      <strong>Location:</strong> {opportunity.location}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#777777", marginBottom: "20px" }}
                    >
                      {opportunity.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#777777", marginBottom: "20px" }}
                    >
                      <strong>Tasks:</strong> {opportunity.tasks.join(", ")}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#777777", marginBottom: "20px" }}
                    >
                      <strong>People Needed:</strong> {opportunity.peopleNeeded}
                    </Typography>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleApplyClick(opportunity.title)}
                    sx={{
                      fontColor: "white",
                      backgroundColor: "#FF8C00",
                      "&:hover": {
                        backgroundColor: "#FFA726",
                      },
                    }}
                  >
                    Apply
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Dialog
            open={openModal}
            onClose={handleModalClose}
            sx={{ backgroundColor: "rgba(44, 44, 44, 0.7)" }}
          >
            <DialogTitle>Apply to {selectedOpportunity}</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Your Name"
                fullWidth
                variant="outlined"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                margin="dense"
                label="Your Email"
                type="email"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 2 }}
              />
              <TextField
                multiline
                rows={4}
                margin="dense"
                label="Short Introduction"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 2 }}
              />
              <TextField
                multiline
                rows={4}
                margin="dense"
                label="Motivation to Apply"
                fullWidth
                variant="outlined"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleModalClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleApplyFormSubmit} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default ExploreOpportunitiesPage;

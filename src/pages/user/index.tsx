import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { ResponsiveAppBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import UserProfilePage from "@/components/userprofile";
import { styled } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004D40",
    },
    secondary: {
      main: "#FF8C00",
    },
  },
});

const StyledBody = styled("div")({
  backgroundColor: "#1a1a1a",
});

const UserProfile = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBody sx={{ width: "100vw" }}>
        <ResponsiveAppBar />
        <UserProfilePage />
        <Footer />
      </StyledBody>
    </ThemeProvider>
  );
};

export default UserProfile;

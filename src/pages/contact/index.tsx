import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "@/components/footer";
import { ResponsiveAppBar } from "@/components/navbar";

const contactUsTheme = createTheme({
  palette: {
    primary: {
      main: "#004D40",
    },
    secondary: {
      main: "#FF8C00",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});

const ContactUsPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Form submitted!\n${JSON.stringify(formData, null, 2)}`);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <ThemeProvider theme={contactUsTheme}>
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
            marginBottom: 3,
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#52c7b8", marginBottom: "20px", textAlign: "center" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#FFFFFF", marginBottom: "40px", textAlign: "center" }}
          >
            We would love to hear from you! If you have any questions,
            suggestions, or just want to say hello, feel free to reach out to
            us.
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              backgroundColor: "#2c2c2c",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <TextField
              required
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              inputProps={{
                style: { color: "#FFFFFF" },
              }}
            />
            <TextField
              required
              fullWidth
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              inputProps={{
                style: { color: "#FFFFFF" },
              }}
            />
            <TextField
              required
              fullWidth
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              inputProps={{
                style: { color: "#FFFFFF" },
              }}
            />
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              inputProps={{
                style: { color: "#FFFFFF" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </form>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default ContactUsPage;

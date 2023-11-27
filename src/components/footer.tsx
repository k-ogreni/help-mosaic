import { Box, Card, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2c2c2c",
        padding: "20px",
        color: "#777777",
        textAlign: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <LocationOnIcon sx={{ fontSize: 20 }} />
        <Typography variant="body2">
          123 Main Street, Cityville, Country
        </Typography>
      </Stack>
      <Typography variant="body2" mt={1}>
        Email: info@helpmosaic.com | Phone: +123 456 7890
      </Typography>
      <Typography variant="body2" mt={1}>
        © {new Date().getFullYear()} HelpMosaic. All rights reserved.
      </Typography>
    </Box>
  );
};

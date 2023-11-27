import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
  (theme: {
    palette: { primary: { main: any } };
    spacing: (arg0: number) => any;
  }) => ({
    successCard: {
      backgroundColor: theme.palette.primary.main, // Use the primary color from the MUI theme
      color: "white",
      marginBottom: theme.spacing(2),
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    readMoreButton: {
      marginTop: theme.spacing(2),
    },
  })
);

const SuccessStories = () => {
  const classes = useStyles();

  const successStories = [
    {
      title: "Transforming a Neighborhood Garden",
      content:
        "Meet Alex, a passionate gardener who volunteered to transform a neglected neighborhood garden. With dedication and hard work, Alex turned it into a vibrant community space. Today, families gather, and children learn about gardening, fostering a sense of community pride and connection.",
    },
    {
      title: "Bringing Joy Through Music Education",
      content:
        "In a small town, Emma, a music enthusiast, initiated a music education program for underprivileged children. She provided free lessons and organized community concerts. Many children discovered their love for music, and Emma's program became a catalyst for cultural enrichment and harmony.",
    },
    {
      title: "Empowering Youth Through Sports",
      content:
        "Jason, a former athlete, recognized the lack of sports opportunities for local youth. He started a sports program, offering coaching and equipment to disadvantaged children. Through sports, Jason empowered young individuals, teaching them valuable life skills like teamwork, discipline, and resilience.",
    },
    {
      title: "Digital Literacy for Seniors",
      content:
        "Sophie, a tech-savvy teenager, noticed the digital divide among seniors in her community. She organized workshops to teach them essential digital skills. Seniors became more connected with their loved ones, accessing online resources. Sophie's initiative bridged the generation gap and improved the quality of life for many.",
    },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ color: "#52c7b8", marginBottom: 4 }}>
        Success Stories
      </Typography>
      {successStories.map((story, index) => (
        <Card key={index} className={classes.successCard}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {story.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {story.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SuccessStories;

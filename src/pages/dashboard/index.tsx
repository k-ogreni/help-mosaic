import * as React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";
import { Card, CardContent, CardMedia, Container } from "@mui/material";
import { Footer } from "@/components/footer";
import { ResponsiveAppBar } from "@/components/navbar";
import { LineChart } from "@mui/x-charts";

const dashboardTheme = createTheme({
  palette: {
    primary: {
      main: "#004D40",
    },
    secondary: {
      main: "#FF8C00",
    },
  },
});

const dashboardLinks = [
  {
    title: "About Us",
    description: "Learn more about HelpMosaic and our mission.",
    link: "/about",
    button: "Learn More",
  },
  {
    title: "Contact Us",
    description: "Have a question or complaint? Contact us.",
    link: "/contact",
    button: "Get in Touch",
  },
  {
    title: "Explore New Opportunities",
    description: "Discover new volunteer opportunities in your community.",
    link: "/opportunities",
    button: "Explore New",
  },
  {
    title: "My Profile",
    description: "Update your profile information and preferences.",
    link: "/user",
    button: "Check Profile",
  },
];

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

const years = [
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
];

const MenVolunteers = [
  8039.714285714286, 8084.361142857143, 8171.373714285714, 8102.331428571429,
  8265.993714285714, 8405.418857142857, 8490.898571428571, 8677.373714285714,
  8955.736571428572, 9225.60257142857, 9545.337142857143, 9714.312571428571,
  9764.221714285714, 9805.722857142857,
];

const WomenVolunteers = [
  6897.631578947368, 6787.159473684211, 6786.362105263157, 6931.712105263157,
  7173.563421052632, 7337.637631578947, 7487.438947368421, 7705.465263157895,
  7904.576315789474, 8135.646578947368, 8398.952105263157, 8589.042894736842,
  8758.315789473685, 9008.535789473684,
];

const FranceVolunteers = [
  28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645,
  30341.807, 31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03,
];

const USVolunteers = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248,
  29259.764, 30077.385, 30932.537, 31946.037, 32660.441, 33271.3, 34232.426,
];

const GermanyVolunteers = [
  25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982,
  30186.945, 31129.584, 32087.604, 33367.285, 34260.29, 34590.93, 34716.44,
];

const CanadaVolunteers = [
  24391, 25769.96, 26381.055, 26270.901, 26250.057, 28868.945, 27346.982,
  28186.945, 29129.584, 30087.604, 30367.285, 31200.29, 32590.93, 32716.44,
];

const BrazilVolunteers = [
  16391, 16768.96, 17985.055, 17998.901, 18234.057, 18868.945, 19346.982,
  19986.945, 20129.584, 20087.604, 21567.285, 21330.29, 21990.93, 22716.44,
];

const JapanVolunteers = [
  11234, 12435, 12990.9, 12302, 13005, 13567.34, 14023.2, 13882.32, 14987,
  15023.604, 14990.285, 15365.29, 15990.93, 16716.44,
];

const IndiaVolunteers = [
  18234, 18835, 18990.9, 19302, 19005, 19567.34, 20023.2, 20882.32, 18987,
  18023.604, 19990.285, 19365.29, 20990.93, 20716.44,
];

const lineChartsParams = {
  series: [
    {
      label: "France",
      data: FranceVolunteers,
      showMark: false,
    },
    {
      label: "Germany",
      data: GermanyVolunteers,
      showMark: false,
    },
    {
      label: "US",
      data: USVolunteers,
      showMark: false,
    },
    {
      label: "Canada",
      data: CanadaVolunteers,
      showMark: false,
    },
    {
      label: "Brazil",
      data: BrazilVolunteers,
      showMark: false,
    },
    {
      label: "Japan",
      data: JapanVolunteers,
      showMark: false,
    },
    {
      label: "India",
      data: IndiaVolunteers,
      showMark: false,
    },
  ],
  width: 500,
  height: 450,
};

const genderChartsParams = {
  series: [
    {
      label: "Men",
      data: MenVolunteers,
      showMark: false,
    },
    {
      label: "Women",
      data: WomenVolunteers,
      showMark: false,
    },
  ],
  width: 500,
  height: 450,
};

const yearFormater = (date: Date) => date.getFullYear().toString();
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format;

const DashboardPage = () => {
  return (
    <ThemeProvider theme={dashboardTheme}>
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
            Welcome to Your Volunteer Dashboard
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#52c7b8", marginBottom: "40px", textAlign: "center" }}
          >
            Manage your volunteer activities and make a positive impact!
          </Typography>
        </Container>
        <Container maxWidth="lg" sx={{ paddingBottom: "40px" }}>
          <Typography
            variant="h4"
            sx={{ color: "#52c7b8", marginBottom: "20px", textAlign: "center" }}
          >
            Dashboard Features
          </Typography>
          <Grid container spacing={3} sx={{ marginBottom: 5 }}>
            {dashboardLinks.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                    href={feature.link}
                    sx={{
                      fontColor: "white",
                    }}
                  >
                    {feature.button}
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: "20px",
              paddingTop: "20px",
              textAlign: "center",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ color: "#52c7b8", marginBottom: "10px" }}
              >
                Volunteer Statistics by Country
              </Typography>
              <LineChart
                {...lineChartsParams}
                xAxis={[
                  {
                    data: years,
                    scaleType: "time",
                    valueFormatter: yearFormater,
                  },
                ]}
                series={lineChartsParams.series.map((s) => ({
                  ...s,
                  valueFormatter: currencyFormatter,
                }))}
                sx={{
                  backgroundColor: "#2c2c2c",
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ color: "#52c7b8", marginBottom: "10px" }}
              >
                Volunteer Statistics by Gender
              </Typography>
              <LineChart
                {...genderChartsParams}
                xAxis={[
                  {
                    data: years,
                    scaleType: "time",
                    valueFormatter: yearFormater,
                  },
                ]}
                series={genderChartsParams.series.map((s) => ({
                  ...s,
                  valueFormatter: currencyFormatter,
                }))}
                sx={{
                  backgroundColor: "#2c2c2c", // Background color
                }}
              />
            </Box>
          </Box>
          <Box>
            <Box sx={{ marginBottom: 4 }}>
              <Typography
                variant="h4"
                sx={{ color: "#52c7b8", marginBottom: 4 }}
              >
                Success Stories
              </Typography>
              {successStories.map((story, index) => (
                <Card
                  key={index}
                  sx={{ marginBottom: 4, backgroundColor: "#2c2c2c" }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ color: "#FF8C00", marginBottom: 2 }}
                    >
                      {story.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#777777", marginBottom: 2 }}
                    >
                      {story.content}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default DashboardPage;

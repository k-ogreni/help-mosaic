import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useRouter } from "next/router";

const pages = ["Home", "Profile", "Blog"];
const links = ["/dashboard", "/user", "/blog"];

export const ResponsiveAppBar = () => {
  const router = useRouter();
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: "#009688",
        }}
      >
        <Container>
          <Box>
            <Toolbar
              disableGutters
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={true}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    {pages.map((page, index) => (
                      <Button
                        key={page}
                        onClick={() => {
                          console.log(`Navigating to ${links[index]}`);
                          router.push(links[index]);
                        }}
                        sx={{
                          my: 2,
                          display: "block",
                          color: "#333333",
                          fontWeight: "bold",
                        }}
                      >
                        {page}
                      </Button>
                    ))}
                  </Box>
                </Menu>
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {pages.map((page, index) => (
                  <Button
                    key={page + index}
                    onClick={() => {
                      console.log(`Navigating to ${links[index]}`);
                      router.push(links[index]);
                    }}
                    sx={{
                      my: 2,
                      display: "block",
                      color: "#333333",
                      fontWeight: "bold",
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/helpmosaic-logo.png"
                  width={40}
                  height={40}
                />
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                    color: "#333333",
                    cursor: "pointer",
                  },
                }}
              >
                <Box sx={{ marginRight: 2 }}>
                  <YouTubeIcon />
                </Box>
                <Box sx={{ marginRight: 2 }}>
                  <FacebookIcon />
                </Box>
                <Box sx={{ marginRight: 2 }}>
                  <TwitterIcon />
                </Box>
              </Box>
            </Toolbar>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

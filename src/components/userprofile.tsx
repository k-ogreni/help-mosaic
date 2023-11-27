import React, { useState } from "react";
import {
  Container,
  Typography,
  Divider,
  Avatar,
  Paper,
  Grid,
  Button,
  Stack,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import UpdateIcon from "@mui/icons-material/Update";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const userTheme = createTheme({
  palette: {
    primary: {
      main: "#52c7b8",
    },
    secondary: {
      main: "#FF8C00",
    },
    text: {
      primary: "#ffffff",
      secondary: "#777777",
    },
    background: {
      paper: "#2c2c2c",
      default: "#1a1a1a",
    },
  },
});

const UserProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const initialUser = {
    username: "john_doe",
    fullName: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionate about coding and technology.",
    avatar: "https://example.com/avatar.jpg",
    skills: ["JavaScript", "React", "Node.js", "CSS"],
    interests: ["Web Development", "Open Source", "Machine Learning"],
    recentActivities: [
      "Completed a coding challenge on LeetCode",
      "Contributed to an open-source project",
      "Attended a tech meetup on React hooks",
    ],
  };

  const [user, setUser] = useState(initialUser);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Handle saving the edited user information
    setIsEditing(false);
  };

  const handleFieldChange = (field: string, value: string | string[]) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleAddActivity = () => {
    setUser((prevUser) => ({
      ...prevUser,
      recentActivities: [...prevUser.recentActivities, ""],
    }));
  };

  return (
    <ThemeProvider theme={userTheme}>
      <Container sx={{ paddingTop: 10, paddingBottom: 5 }}>
        <Paper elevation={3} sx={{ padding: 4, backgroundColor: "paper" }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Avatar
                alt={user.username}
                src={user.avatar}
                sx={{ width: 120, height: 120 }}
              />
            </Grid>
            <Grid item>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ color: "primary.main" }}>
                  {user.fullName}
                </Typography>
                <Typography color="textSecondary">@{user.username}</Typography>
                {isEditing ? (
                  <Button
                    variant="outlined"
                    onClick={handleSaveClick}
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                    }}
                  >
                    Save Changes
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={handleEditClick}
                    startIcon={<EditIcon />}
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                    }}
                  >
                    Edit Profile
                  </Button>
                )}
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3, backgroundColor: "secondary.main" }} />
          <div>
            <Typography variant="h6" sx={{ color: "primary.main" }}>
              User Information
            </Typography>
            <Divider sx={{ mb: 2, backgroundColor: "secondary.main" }} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {isEditing ? (
                  <TextField
                    fullWidth
                    label="Full Name"
                    defaultValue={user.fullName}
                    onChange={(e) =>
                      handleFieldChange("fullName", e.target.value)
                    }
                  />
                ) : (
                  <Typography sx={{ color: "text.secondary" }}>
                    <PersonIcon /> {user.fullName}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6}>
                {isEditing ? (
                  <TextField
                    fullWidth
                    label="Email"
                    defaultValue={user.email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                  />
                ) : (
                  <Typography sx={{ color: "text.secondary" }}>
                    <EmailIcon /> {user.email}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                {isEditing ? (
                  <TextField
                    fullWidth
                    label="Username"
                    defaultValue={user.username}
                    onChange={(e) =>
                      handleFieldChange("username", e.target.value)
                    }
                  />
                ) : (
                  <Typography sx={{ color: "text.secondary" }}>
                    <AccountBoxIcon /> {user.username}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </div>
          <Divider sx={{ my: 3, backgroundColor: "secondary.main" }} />
          <div>
            <Typography variant="h6" sx={{ color: "primary.main" }}>
              Bio
            </Typography>
            <Divider sx={{ mb: 2, backgroundColor: "secondary.main" }} />
            {isEditing ? (
              <TextField
                fullWidth
                multiline
                label="Bio"
                defaultValue={user.bio}
                onChange={(e) => handleFieldChange("bio", e.target.value)}
              />
            ) : (
              <Typography sx={{ color: "text.primary" }}>{user.bio}</Typography>
            )}
          </div>
          <Divider sx={{ my: 3, backgroundColor: "secondary.main" }} />
          <div>
            <Typography variant="h6" sx={{ color: "primary.main" }}>
              Skills
            </Typography>
            <Divider sx={{ mb: 2, backgroundColor: "secondary.main" }} />
            {isEditing ? (
              <TextField
                fullWidth
                label="Skills"
                defaultValue={user.skills.join(", ")}
                onChange={(e) =>
                  handleFieldChange("skills", e.target.value.split(", "))
                }
              />
            ) : (
              <Typography sx={{ color: "text.primary" }}>
                {user.skills.join(", ")}
              </Typography>
            )}
          </div>
          <Divider sx={{ my: 3, backgroundColor: "secondary.main" }} />
          <div>
            <Typography variant="h6" sx={{ color: "primary.main" }}>
              Interests
            </Typography>
            <Divider sx={{ mb: 2, backgroundColor: "secondary.main" }} />
            {isEditing ? (
              <TextField
                fullWidth
                label="Interests"
                defaultValue={user.interests.join(", ")}
                onChange={(e) =>
                  handleFieldChange("interests", e.target.value.split(", "))
                }
              />
            ) : (
              <Typography sx={{ color: "text.primary" }}>
                {user.interests.join(", ")}
              </Typography>
            )}
          </div>
          <Divider sx={{ my: 3, backgroundColor: "secondary.main" }} />
          <div>
            <Typography variant="h6" sx={{ color: "primary.main" }}>
              Recent Activities
            </Typography>
            <Divider sx={{ mb: 2, backgroundColor: "secondary.main" }} />
            <List sx={{ color: "text.primary" }}>
              {user.recentActivities.map((activity, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <UpdateIcon sx={{ marginRight: 1 }} />
                  {isEditing ? (
                    <TextField
                      fullWidth
                      defaultValue={activity}
                      onChange={(e) =>
                        handleFieldChange("recentActivities", [
                          ...user.recentActivities.slice(0, index),
                          e.target.value,
                          ...user.recentActivities.slice(index + 1),
                        ])
                      }
                    />
                  ) : (
                    <Typography>{activity}</Typography>
                  )}
                </ListItem>
              ))}
              {isEditing && (
                <ListItem
                  sx={{ display: "flex", alignItems: "center" }}
                  key={user.recentActivities.length}
                >
                  <UpdateIcon sx={{ marginRight: 1 }} />
                  <TextField
                    fullWidth
                    placeholder="Add new activity"
                    onChange={(e) =>
                      handleFieldChange("recentActivities", [
                        ...user.recentActivities,
                        e.target.value,
                      ])
                    }
                  />
                </ListItem>
              )}
              {isEditing && (
                <ListItem
                  sx={{ display: "flex", alignItems: "center" }}
                  onClick={handleAddActivity}
                >
                  <UpdateIcon sx={{ marginRight: 1 }} />
                  <Typography color="primary.main">Add Activity</Typography>
                </ListItem>
              )}
            </List>
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default UserProfilePage;

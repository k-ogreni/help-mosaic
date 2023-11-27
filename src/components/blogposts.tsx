import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider,
} from "@mui/material";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    content: string;
    image: string;
    date: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#2c2c2c",
        height: "100%",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt={post.title}
        height="140"
        image={post.image}
        sx={{ objectFit: "cover" }}
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography variant="h5" sx={{ color: "#FF8C00", marginBottom: 2 }}>
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#777777", marginBottom: 2 }}
          >
            {post.content}
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography
            variant="caption"
            sx={{ color: "#777777", marginBottom: 1 }}
          >
            {post.date}
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{
            color: "white",
            marginTop: 2,
            alignSelf: "flex-end",
          }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogPost;

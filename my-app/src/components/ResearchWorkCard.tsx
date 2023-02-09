import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface ResearchWorkCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ResearchWorkCard(props: ResearchWorkCardProps) {
  return (
    <Card
      sx={{
        "&:hover": {
          transform: "scale(1.05)",
        },
        backgroundColor: "#eeeeff",
        justifySelf: "center",
        alignSelf: "center",
      }}
    >
      <CardActionArea onClick={(event) => (window.location.href = props.url)}>
        <CardMedia
          component="img"
          height="180"
          image={props.image}
          alt="Academic Work Link"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

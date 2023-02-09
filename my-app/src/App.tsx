import "./App.css";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import ResearchWorkCard from "./components/ResearchWorkCard";
import deepLearningClustering from "./images/fruits.png";
import blackBox from "./images/black-box.png";
import privacySurveillance from "./images/privacy-surveillance-cctv.png";
import explorationInRL from "./images/exploration-in-rl.png";

const researchWorks = [
  {
    title: "Deep Learning Clustering",
    description: "An overview of the current techniques and challenges",
    image: deepLearningClustering,
    url: "https://github.com/JanRodriguez/academic-works/raw/main/Deep_Learning_Clustering.pdf",
  },
  {
    title: "Privacy in an AI world",
    description: "What is actually at stake when losing our privacy?",
    image: privacySurveillance,
    url: "https://github.com/JanRodriguez/academic-works/raw/main/Privacy_in_an_AI_world.pdf",
  },
  {
    title: "Exploration in Reinforcement Learning",
    description: "An Introduction and Comparison of Three Recent Methods",
    image: explorationInRL,
    url: "https://github.com/JanRodriguez/academic-works/raw/main/Exploration_in_Reinforcement_Learning.pdf",
  },
  {
    title: "Explainable AI: ",
    description: "A Taxonomy of the Different Methods on the Field",
    image: blackBox,
    url: "https://github.com/JanRodriguez/academic-works/raw/main/Explainable_AI.pdf",
  },
];

function App() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <ResponsiveAppBar />
      <Grid
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography variant="h4" sx={{ marginY: "30px" }}>
          Academic works
        </Typography>
        <List
          sx={{
            flexGrow: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
            display: "flex",
            marginX: "20px",
          }}
        >
          {researchWorks.map((researchWork) => (
            <ListItem key={researchWork.title}>
              <ResearchWorkCard
                title={researchWork.title}
                description={researchWork.description}
                image={researchWork.image}
                url={researchWork.url}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Footer />
    </Box>
  );
}

export default App;

import { Box, Container } from "@mui/material";

export default function Footer() {
  return (
    <Container>
      <Box
        sx={{
          // "&:hover": {
          //   backgroundColor: "#ffffff",
          // },
          display: "flex",
          height: 80,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        © Copyright 2023. All rights reserved.
      </Box>
    </Container>
  );
}

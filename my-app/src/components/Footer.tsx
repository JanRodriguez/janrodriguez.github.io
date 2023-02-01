import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        "&:hover": {
          backgroundColor: "#ffffff",
        },
        display: "flex",
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      © Copyright 2023. All rights reserved.
    </Box>
  );
}

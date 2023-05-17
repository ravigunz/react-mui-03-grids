import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function LearnGrid() {
  return (
    <div>
      <Grid
        container
        sx={{ bgcolor: "teal", height: "400px" }}
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={6} sm={4}>
          <Box
            sx={{
              bgcolor: "lightgreen",
            //   pt: 3,
            //   pb: 2,
              "&:hover": {
                bgcolor: "pink",
              },
            }}
          >
            <Typography sx={{ "&:hover": { color: "white" } }}>
              Itme 01
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box
            sx={{
              bgcolor: "lightgreen",
              p: 4,
              "&:hover": {
                bgcolor: "lightblue",
              },
            }}
          >
            <Typography sx={{ "&:hover": { color: "white" } }}>
              Itme 02
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: "lightgreen",
              pt: 4,
              pb: 8,
              pl: 4,
              pr: 4,
              "&:hover": {
                bgcolor: "red",
              },
            }}
          >
            <Typography sx={{ "&:hover": { color: "white" } }}>
              Itme 03
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: "lightgreen",
              p: 4,
              "&:hover": {
                bgcolor: "yellow",
              },
            }}
          >
            <Typography sx={{ "&:hover": { color: "white" } }}>
              Itme 04
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              bgcolor: "lightgreen",
              p: 4,
              "&:hover": {
                bgcolor: "blue",
              },
            }}
          >
            <Typography sx={{ "&:hover": { color: "white" } }}>
              Itme 05
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              bgcolor: "lightgreen",
              p: 4,
              "&:hover": {
                bgcolor: "purple",
              },
            }}
          >
            <Typography sx={{ "&:hover": { color: "white" } }}>
              Itme 06
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

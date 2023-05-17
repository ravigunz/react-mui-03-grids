import { Grid, Typography } from "@mui/material";
import React from "react";

export default function NestedGrid() {
  return (
    <div>
      <Grid container>
        <Grid item xs={4} sm={4} md={2} sx={{ bgcolor: "yellow" }}>
          {Array.from(Array(18)).map((val, key) => {
            return (
              <Typography variant="h4" key={key} sx={{ p: 1 }}>
                Item {key}
              </Typography>
            );
          })}
        </Grid>
        <Grid item xs={8} sm={8} md={10} sx={{ bgcolor: "teal" }}>
          <Grid container sx={{ bgcolor: "white" }}>
            <Grid item>
              <Typography>Top Navigation Bar</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={6} md={8} sx={{ bgcolor: 'lightcoral'}}>
              <Typography sx={{ fontSize: '40px', color: 'white'}}>Inner Left</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ bgcolor: 'lavender'}}>
              <Typography sx={{ fontSize: '40px', color: 'black'}}>Inner Right</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

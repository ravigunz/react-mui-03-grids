import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          mt: 40,
          ml: "auto",
          mr: "auto",
          width: "500px",
          bgcolor: "lightblue",
          pt: 6,
          pb: 4,
          borderRadius: 0,
          transition:
            'border-radius 2s ease-in-out, transform 2s ease-in-out',
          "&:hover": {
            bgcolor: "#FF5733",
            cursor: "pointer",
            borderRadius: 100,
            transform: "rotate(45deg)",
          },
        }}
      >
        <Typography variant="h2">Hi There!</Typography>
      </Box>
    </div>
  );
}

export default App;

// React Router Dom
import { useNavigate } from "react-router-dom";

// Material

import { Box, Typography, Button } from "@mui/material";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h3">Oops!</Typography>
      <Typography>Something went wrong, sorry!</Typography>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Home
      </Button>
    </Box>
  );
}

import { AppBar, Button, Divider, Toolbar } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Divider />
        <Button onClick={() => navigate("/sign")}>Join Us</Button>
      </Toolbar>
    </AppBar>
  );
}

import { AppBar, Button, IconButton, Toolbar, Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useContext } from "react";
import { ModeContext } from "../App";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { darkMode, switchMode } = useContext(ModeContext);
  return (
    <AppBar
      className="navbar"
      sx={{
        "& .MuiButton-root": { color: "secondary.dark" },
        "& .MuiButton-root:hover": { color: "white" },
      }}
    >
      <Toolbar className="navbar_tools">
        <Box className="navbar_tools-navigation">
          <Button onClick={() => navigate("/sign")}>Join Us</Button>
        </Box>
        <IconButton
          sx={{ "&.MuiSvgIcon-root:hover": { backgroundColor: "white" } }}
          onClick={switchMode}
        >
          {darkMode ? <LightModeIcon /> : <NightlightIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

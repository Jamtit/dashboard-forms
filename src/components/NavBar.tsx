// React
import { useContext } from "react";
import { ModeContext } from "../App";

// React Router Dom
import { useNavigate } from "react-router-dom";

// Material
import { AppBar, Button, IconButton, Toolbar, Box } from "@mui/material";

// Icons
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

export default function Navbar() {
  const navigate = useNavigate();
  const { darkMode, switchMode } = useContext(ModeContext);

  const goToFaq = () => {
    let faqDiv = document.getElementById("home_container-faq");
    faqDiv?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrollToContact = () => {
    let contactDiv = document.getElementById("footer_container_body-contact");
    contactDiv?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
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
          <Button onClick={goToFaq}>FAQ</Button>
          <Button onClick={scrollToContact}>Contact Us</Button>
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

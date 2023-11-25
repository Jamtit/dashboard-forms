// React
import { useContext } from "react";
import { ModeContext } from "../App";

// Router

import { useNavigate } from "react-router-dom";

// Material
import { Container, Box, Typography, IconButton, Button } from "@mui/material";

// Icons

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const { darkMode } = useContext(ModeContext);
  const navigate = useNavigate();

  const scrollToFAQ = () => {
    let faqDiv = document.getElementById("home_container-faq");
    faqDiv?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const scrollToGoal = () => {
    let goalDiv = document.getElementById("home_container-goal");
    goalDiv?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <Container
      className="footer"
      sx={{
        "@media (min-width: 1200px)": { maxWidth: "100vw" },
        "@media (min-width: 600px)": { paddingRight: 0, paddingLeft: 0 },
      }}
    >
      <Box sx={{ maxHeight: "300px" }}>
        <div
          className={darkMode ? "bottom footer-dark" : "bottom footer-light"}
        ></div>
      </Box>
      <Box className="footer_container">
        <Box className="footer_container_header">
          <IconButton disableRipple>
            <FacebookIcon sx={{ fontSize: "50px" }} />
          </IconButton>
          <IconButton
            disableRipple
            href="https://www.youtube.com/"
            target="_blank"
          >
            <YouTubeIcon sx={{ fontSize: "50px" }} />
          </IconButton>
          <IconButton disableRipple>
            <InstagramIcon sx={{ fontSize: "50px" }} />
          </IconButton>
          <IconButton disableRipple>
            <LinkedInIcon sx={{ fontSize: "50px" }} />
          </IconButton>
        </Box>
        <Box className="footer_container_body">
          <Box className="footer_container_body-useful">
            <Typography>Useful links</Typography>
            <Button disableRipple onClick={() => navigate("/sign")}>
              Join Us
            </Button>
            <Button disableRipple onClick={scrollToFAQ}>
              FAQ
            </Button>
            <Button disableRipple onClick={scrollToGoal}>
              Goal
            </Button>
          </Box>
          <Box>
            <Typography>Contact us</Typography>
          </Box>
        </Box>
        <Box className="footer_container_other">Contact Info</Box>
      </Box>
    </Container>
  );
}

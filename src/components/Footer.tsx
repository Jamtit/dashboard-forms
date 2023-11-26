// React
import { useContext } from "react";
import { ModeContext } from "../App";

// Router

import { useNavigate } from "react-router-dom";

// Material
import {
  Container,
  Box,
  Typography,
  IconButton,
  Button,
  Link,
  Divider,
} from "@mui/material";

// Icons

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

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
            <Typography variant="h6">Useful links</Typography>
            <Button
              disableRipple
              onClick={() => navigate("/sign")}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "primary.dark",
                },
                width: "100px",
              }}
            >
              Join Us
            </Button>
            <Button
              disableRipple
              onClick={scrollToFAQ}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "primary.dark",
                },
                width: "100px",
              }}
            >
              FAQ
            </Button>
            <Button
              disableRipple
              onClick={scrollToGoal}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "primary.dark",
                },
                width: "100px",
              }}
            >
              Goal
            </Button>
          </Box>
          <Box
            className="footer_container_body-contact"
            id="footer_container_body-contact"
          >
            <Typography variant="h6">Contact us</Typography>
            <Box className="footer_container_body-contact--box">
              <MailIcon sx={{ color: "primary.main" }} />
              <Typography className="footer_container_body-contact--box_mail">
                interesting@mail.com
              </Typography>
            </Box>
            <Box className="footer_container_body-contact--box">
              <PhoneAndroidIcon
                sx={{
                  position: "relative",
                  right: "29px",
                  color: "primary.main",
                }}
              />
              <Typography className="footer_container_body-contact--box_number">
                +3701111111
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="footer_container_other">
          <Typography>&#169; All Rights Are Reserved By The Company</Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link>Cookie Policy</Link>
            <Divider
              orientation="vertical"
              sx={{ marginInline: "10px" }}
              flexItem
            />
            <Link>Privacy Policy</Link>
            <Divider
              orientation="vertical"
              sx={{ marginInline: "10px" }}
              flexItem
            />
            <Link>Terms of Use and Sale</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

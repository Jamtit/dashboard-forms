//React
import { useContext } from "react";
import { ModeContext } from "../App";

// Components
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// Material
import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

//Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Home() {
  const { darkMode } = useContext(ModeContext);

  return (
    <Container
      className="home"
      sx={{
        "@media (min-width: 1200px)": { maxWidth: "100vw" },
        "@media (min-width: 600px)": { paddingRight: 0, paddingLeft: 0 },
      }}
    >
      <Navbar />
      <Box className="home_container">
        <Box className="home_container-welcome">
          <Typography variant="h3" fontWeight={700}>
            Rear window is always smaller, than the front window
          </Typography>
          <Box className="home_container-welcome_stack">
            <Box>
              <Typography variant="h5" sx={{ mb: "30px", fontWeight: "600" }}>
                Libraries used
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box className="library">
                  <Box className="library_box">
                    <img
                      src="/react-hook-form-logo.svg"
                      className="library_logo"
                      id="library_logo"
                    />
                  </Box>
                  <Typography className="library_name" id="library_name">
                    React-Hook-Form
                  </Typography>
                </Box>
                <Box className="library">
                  <Box className="library_box">
                    <img
                      src={
                        darkMode
                          ? "/react-router-mark-color-inverted.svg"
                          : "react-router-mark-color.svg"
                      }
                      alt="react-router-dom-icon"
                      className="library_logo"
                    />
                  </Box>
                  <Typography className="library_name">
                    React-Router-Dom
                  </Typography>
                </Box>
                <Box className="library">
                  <Box className="library_box">
                    <img src="/material-ui-logo.svg" className="library_logo" />
                  </Box>
                  <Typography className="library_name">MUI</Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ mb: "30px", fontWeight: "600" }}>
                Stack used
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box className="stack">
                  <Box className="stack_box">
                    <img
                      src="/react-logo.svg"
                      alt="react-logo"
                      className="stack_logo"
                    />
                  </Box>
                  <Typography className="stack_name" id="stack_name">
                    React
                  </Typography>
                </Box>
                <Box className="stack">
                  <Box className="stack_box">
                    <img
                      src="/scss-logo.png"
                      alt="scss-logo"
                      className="stack_logo"
                    />
                  </Box>
                  <Typography className="stack_name" id="stack_name">
                    Scss
                  </Typography>
                </Box>
                <Box className="stack">
                  <Box className="stack_box">
                    <img
                      src="/vite.svg"
                      alt="vite-logo"
                      className="stack_logo"
                    />
                  </Box>
                  <Typography className="stack_name" id="stack_name">
                    Vite
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="home_container-goal" id="home_container-goal">
          <div
            className={darkMode ? "wave goal-dark" : "wave goal-light"}
          ></div>
          <Typography variant="h2" fontWeight={500} sx={{ pt: "50px" }}>
            Goal?
          </Typography>
          <Typography sx={{ pb: "100px" }}>
            The goal is to create this website sketch and while doing so, to
            develop our Frontend skills regarding making more responsive,
            interactive web page
          </Typography>
          <div
            className={darkMode ? "wave goal-dark-bot" : "wave goal-light-bot"}
          ></div>
        </Box>
        <Box className="home_container-faq" id="home_container-faq">
          <Typography variant="h3" sx={{ marginBlock: "30px" }}>
            Frequently Asked
            <Typography
              variant="h3"
              sx={{
                color: "primary.main",
                display: "inline-block",
                ml: "10px",
              }}
            >
              Questions
            </Typography>
          </Typography>
          <Box>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  What technologies were used for the visual aspect of the
                  website?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  As of current development stage the technologies are as such:
                  React, MUI
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  What was the motivation to create this website?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Main motivation was to create unique website with sign-in,
                  sign-up forms and user settings, which the user can edit.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Will there be backend implemented for this website?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Currently the main focus is to master frontend technologies.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}

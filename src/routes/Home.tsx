//React
import { useContext } from "react";
import { ModeContext } from "../App";

// Components
import Navbar from "../components/NavBar";

// Material
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
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
          <Box>
            <Typography variant="h4" fontWeight={700}>
              Rear window is always smaller, than the front window
            </Typography>
            <Typography>
              With this project, we seek the best opportunities for all of our
              clientele
            </Typography>
          </Box>
          <Box>
            <Typography>Stack used</Typography>
            <List>
              <ListItem>
                <ListItemText primary="React" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mui" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Scss" />
              </ListItem>
              <ListItem>
                <ListItemText primary="React-Hook-Forms" />
              </ListItem>
              <ListItem>
                <ListItemText primary="React-Router-Dom" />
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box className="home_container-goal">
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
        <Box className="home_container-faq">
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
    </Container>
  );
}

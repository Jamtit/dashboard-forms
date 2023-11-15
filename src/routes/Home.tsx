import Navbar from "../components/NavBar";
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
export default function Home() {
  return (
    <Container className="home">
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
          <Typography variant="h4" fontWeight={500}>
            Goal?
          </Typography>
          <Typography>
            The goal is to create this website sketch and while doing so, to
            develop our Frontend skills regarding making more responsive,
            interactive web page
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

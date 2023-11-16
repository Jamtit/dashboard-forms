// React
import { useState, createContext } from "react";

// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//Material
import {
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

//Routes
import Root from "./routes/Root";
import Sign from "./routes/Sign";
import Home from "./routes/Home";
import Error from "./routes/Error";
import User from "./routes/User";

interface DarkMode {
  darkMode: boolean;
  switchMode?: () => void;
}

export const ModeContext = createContext<DarkMode>({ darkMode: false });

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleModes = () => {
    setIsDarkMode(!isDarkMode);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/user" element={<User />} />
      </Route>
    )
  );

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#41C124",
        light: "#65bf50",
        dark: "#31991a",
      },
      secondary: {
        main: "#5f24b7",
        light: "#7247b3",
        dark: "#45178a",
      },
      warning: {
        main: "#b8561d",
        light: "#b5693e",
        dark: "#994615",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      action: {
        disabled: "rgba(78, 79, 77, 0.7)",
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            background:
              "linear-gradient(90deg, rgba(95,36,183,1) 0%, rgba(95,36,183,1) 38%, rgba(65,193,36,1) 64%, rgba(65,193,36,1) 100%)",
          },
        },
      },
    },
  });
  return (
    <ModeContext.Provider
      value={{ darkMode: isDarkMode, switchMode: toggleModes }}
    >
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Container>
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </ModeContext.Provider>
  );
}

export default App;

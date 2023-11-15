import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//Components
import { Container } from "@mui/material";

//Routes
import Root from "./routes/Root";
import Sign from "./routes/Sign";
import Home from "./routes/Home";
import Error from "./routes/Error";
import User from "./routes/User";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/user" element={<User />} />
      </Route>
    )
  );
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;

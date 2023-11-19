//React Router Dom
import { Outlet } from "react-router-dom";

//Material
import { Box } from "@mui/material";

export default function Root() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          placeSelf: "center",
          "@media (min-width: 1200px)": { maxWidth: "100vw" },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/sign"}>Sign</Link>

      <div>
        <Outlet />
      </div>
    </>
  );
}

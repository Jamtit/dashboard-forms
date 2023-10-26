import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Oops!</h1>
      <p>Something went wrong, sorry!</p>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
}

// React
import { useState, useContext } from "react";
import { ModeContext } from "../App";

// React Router Dom
import { useNavigate } from "react-router-dom";

// React Hook Forms
import { useForm, SubmitHandler } from "react-hook-form";

// Material
import { Button, Box, Typography } from "@mui/material";

//Icons
import HomeIcon from "@mui/icons-material/Home";

interface FormInputs {
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function Sign() {
  const [haveAccount, setHaveAccount] = useState(false);
  const { darkMode } = useContext(ModeContext);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    if (isValid) navigate("/user");
  };

  return (
    <Box className="sign">
      <Button
        sx={{
          color: haveAccount
            ? darkMode
              ? "background.default"
              : "white"
            : "primary.main",
        }}
        className={haveAccount ? "sign_home-have" : "sign_home"}
        onClick={() => navigate("/")}
      >
        <HomeIcon />
      </Button>
      <Box className={haveAccount ? "sign_form-have" : "sign_form"}>
        <Box className="sign_form_text">
          <Typography
            variant="h5"
            sx={{ color: `${haveAccount ? "#5f24b7" : "#41c124"}` }}
          >
            {haveAccount ? "Welcome back!" : "Welcome!"}
          </Typography>
          <Typography>
            {haveAccount
              ? "Please fill in your credentials to continue"
              : "Please fill in the form to create an account"}
          </Typography>
        </Box>
        <form
          className={haveAccount ? "sign_form-in" : "sign_form-up"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="sample@mail.com"
            {...register("email", {
              required: "Email is required",
            })}
          />
          <p>{errors.email?.message}</p>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "The password must be at least 8 symbols long",
              },
            })}
          />
          <p>{errors.password?.message}</p>
          <Box className={haveAccount ? "sign_form-in_additional" : "sign-up"}>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                minLength: {
                  value: 8,
                  message: "The password must be at least 8 symbols long",
                },
              })}
            />
            <p>{errors.confirmPassword?.message}</p>
          </Box>
          <Button
            sx={{ color: `${darkMode ? "primary.main" : "secondary.main"}` }}
            variant="outlined"
            type="submit"
            onClick={() => (isValid ? navigate("/user") : "")}
            disabled={isValid ? false : true}
          >
            {haveAccount ? "Sign-in" : "Sign-up"}
          </Button>
        </form>
      </Box>
      <Box
        className={haveAccount ? "sign_information-have" : "sign_information"}
      >
        <div
          className={
            haveAccount
              ? darkMode
                ? "spacer lay2-dark"
                : "spacer lay2"
              : darkMode
              ? "spacer lay1-dark"
              : "spacer lay1"
          }
        ></div>
        <Box
          className={
            haveAccount ? "sign_information-have_text" : "sign_information_text"
          }
        >
          <Typography>
            {haveAccount
              ? "Still, don't have an account?"
              : "Oh, you already have an account?"}
          </Typography>
          <Typography>
            {haveAccount
              ? "Do not be scared and create one!"
              : "Feel free to use that one!"}
          </Typography>
          <Button
            sx={{
              mt: "50px",
              color: darkMode ? "text.primary" : "white",
              borderColor: darkMode ? "text.primary" : "white",
              "&:hover": {
                borderColor: darkMode ? "text.secondary" : "#d4d4d4",
              },
            }}
            variant="outlined"
            onClick={() => setHaveAccount(!haveAccount)}
          >
            {haveAccount ? "Create one" : "Use already existing one"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

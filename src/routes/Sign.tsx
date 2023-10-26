import { Button, Box } from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormInputs {
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function Sign() {
  const [haveAccount, setHaveAccount] = useState(false);
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
    <Box>
      <form
        className={haveAccount ? "sign-in" : "sign-up"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="sample@mail.com"
          {...register("email", {
            required: "Email is required for the registration",
          })}
        />
        <p>{errors.email?.message}</p>
        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password is required for the registration",
            minLength: {
              value: 8,
              message: "The password must be at least 8 symbols long",
            },
          })}
        />
        <p>{errors.password?.message}</p>
        <Box className={haveAccount ? "sign-in_additional" : "sign-up"}>
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
        <input type="submit" />
      </form>
      <Button variant="outlined" onClick={() => setHaveAccount(!haveAccount)}>
        Have an account already? Sign-In!
      </Button>
    </Box>
  );
}

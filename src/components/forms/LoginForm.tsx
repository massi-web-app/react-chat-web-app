import React from "react";
import { useForm } from "react-hook-form";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          id="email"
          type="email"
          {...register("email", { required: "Email is Required" })}
        />
      </InputContainer>

      <InputContainer className={styles.loginFormPassword}>
        <InputLabel htmlFor="password">password</InputLabel>
        <InputField
          id="password"
          type="password"
          {...register("password", { required: "Password is Required" })}
        />
      </InputContainer>
      <Button className={styles.button}>Login</Button>

      <div className={styles.footerText}>
        <span>Don't have account?</span>
        <Link to="/register">
          <span>register</span>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

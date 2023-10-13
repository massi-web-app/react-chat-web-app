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

const RegisterForm = () => {
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
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField
            id="firstName"
            type="text"
            {...register("firstName", { required: "FirstName is Required" })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">LastName</InputLabel>
          <InputField
            id="lastName"
            type="text"
            {...register("lastName", { required: "LastName is Required" })}
          />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">password</InputLabel>
        <InputField
          id="password"
          type="password"
          {...register("password", { required: "Password is Required" })}
        />
      </InputContainer>
      <Button className={styles.button}>Create My Account</Button>
      <div className={styles.footerText}>
        <span> Alradey have an account?</span>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;

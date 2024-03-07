import React from "react";
import {useForm} from "react-hook-form";
import styles from "./index.module.scss";
import {Link} from "react-router-dom";
import {
    Button,
    InputContainer,
    InputField,
    InputLabel,
} from "../../utils/styles";
import {CreateUserParams} from "../../utils/types";
import {postRegisterUser} from "../../utils/api";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<CreateUserParams>();

    console.log(errors);
    const onSubmit = async (data: CreateUserParams) => {
        try {
            await postRegisterUser(data);
        } catch (err) {
            console.log("err", err);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField
                    id="email"
                    type="email"
                    {...register("email", {required: "Email is Required"})}
                />
            </InputContainer>
            <section className={styles.nameFieldRow}>
                <InputContainer>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <InputField
                        id="firstName"
                        type="text"
                        {...register("firstName", {required: "FirstName is Required"})}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="lastName">LastName</InputLabel>
                    <InputField
                        id="lastName"
                        type="text"
                        {...register("lastName", {required: "LastName is Required"})}
                    />
                </InputContainer>
            </section>
            <InputContainer>
                <InputLabel htmlFor="password">password</InputLabel>
                <InputField
                    id="password"
                    type="password"
                    {...register("password", {required: "Password is Required"})}
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

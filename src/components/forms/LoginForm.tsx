import React from "react";
import {useForm} from "react-hook-form";
import styles from "./index.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {
    Button,
    InputContainer,
    InputField,
    InputLabel,
} from "../../utils/styles";
import {UserCredentialParams} from "../../utils/types";
import {postLoginUser} from "../../utils/api";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<UserCredentialParams>();

    const navigate=useNavigate();

    const onSubmit = async (data: UserCredentialParams) => {

        try {
            await postLoginUser(data);
            navigate('/conversations')
        } catch (err) {
            console.log(err);
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

            <InputContainer className={styles.loginFormPassword}>
                <InputLabel htmlFor="password">password</InputLabel>
                <InputField
                    id="password"
                    type="password"
                    {...register("password", {required: "Password is Required"})}
                />
            </InputContainer>
            <Button className={styles.button}>Login</Button>

            <div className={styles.footerText}>
                <span>Don't have account?</span>
                <Link to="/register">
                    <span>Register</span>
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;

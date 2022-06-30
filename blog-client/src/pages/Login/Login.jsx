import axios from "axios";
import React, { useContext, useRef } from "react";
import { NavLink } from "../../components/Navbar/Navbar.styled";
import { Context } from "../../context/Context";
import {
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginFormInput,
  LoginFormLabel,
  LoginRegisterButton,
  LoginTitle,
} from "./Login.styled";

export const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        })
        .then((res) => {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        })
        .catch((err) => dispatch({ type: "LOGIN_FAILURE" }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginContainer>
      <LoginTitle data-testid="LoginTitle">Login</LoginTitle>
      <LoginForm onSubmit={onSubmitHandler}>
        <LoginFormLabel>Username</LoginFormLabel>
        <LoginFormInput
          type="text"
          placeholder="Enter your username..."
          ref={usernameRef}
        />
        <LoginFormLabel>Password</LoginFormLabel>
        <LoginFormInput
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <LoginButton type="submit" disabled={isFetching}>
          Login
        </LoginButton>
      </LoginForm>
      <LoginRegisterButton>
        <NavLink to="/register">Register</NavLink>
      </LoginRegisterButton>
    </LoginContainer>
  );
};

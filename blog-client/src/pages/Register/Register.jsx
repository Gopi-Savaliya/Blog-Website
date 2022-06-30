import React, { useState } from "react";
import { NavLink } from "../../components/Navbar/Navbar.styled";
import {
  Error,
  ErrorContainer,
  RegisterButton,
  RegisterContainer,
  RegisterForm,
  RegisterFormInput,
  RegisterFormLabel,
  RegisterLoginButton,
  RegisterTitle,
} from "./Register.styled";
import { validEmail, validPassword, validUsername } from "./Regex";
import axios from "axios";

export const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isValidate, setIsValidate] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeHandler = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const addUser = () => {
    try {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/register`, {
          username: userData.username,
          email: userData.email,
          password: userData.password,
        })
        .then((res) => {
          res.data && window.location.replace("/login");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const validation = (e) => {
    e.preventDefault();
    if (validUsername.test(userData.username)) {
      try {
        axios.get(`${process.env.REACT_APP_API_URL}/users`).then((res) => {
          const existedUser = res.data.filter(
            (user) => user.username === userData.username
          );
          if (existedUser.length === 0) {
            if (validEmail.test(userData.email)) {
              if (validPassword.test(userData.password)) {
                setIsValidate(true);
                setErrorMessage("");
                addUser();
              } else {
                setIsValidate(false);
                setErrorMessage(
                  "Password must contain at least one capital letter, small letter, digit & special character with minimum length of 6"
                );
              }
            } else {
              setIsValidate(false);
              setErrorMessage("Email is incorrect");
            }
          } else {
            setIsValidate(false);
            setErrorMessage("Username should be unique");
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      setIsValidate(false);
      setErrorMessage("Username is not valid");
    }
  };

  return (
    <RegisterContainer>
      <RegisterTitle data-testid="RegisterTitle">Register</RegisterTitle>
      <RegisterForm onSubmit={validation}>
        <RegisterFormLabel>Username</RegisterFormLabel>
        <RegisterFormInput
          type="text"
          name="username"
          onChange={onChangeHandler}
          placeholder="Enter your username..."
          required
        />
        <RegisterFormLabel>Email</RegisterFormLabel>
        <RegisterFormInput
          type="text"
          name="email"
          onChange={onChangeHandler}
          placeholder="Enter your email..."
          required
        />
        <RegisterFormLabel>Password</RegisterFormLabel>
        <RegisterFormInput
          type="password"
          name="password"
          onChange={onChangeHandler}
          placeholder="Enter your password..."
          required
        />
        {!isValidate && (
          <ErrorContainer>
            <Error>{errorMessage}</Error>
          </ErrorContainer>
        )}
        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterForm>
      <RegisterLoginButton>
        <NavLink to="/login">Login</NavLink>
      </RegisterLoginButton>
    </RegisterContainer>
  );
};

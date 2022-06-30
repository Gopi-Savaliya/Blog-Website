import styled from "styled-components";

export const RegisterContainer = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  align-items: center;
`;

export const RegisterTitle = styled.span`
  font-size: 50px;
`;

export const RegisterForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const RegisterFormLabel = styled.label`
  margin: 10px 0;
`;

export const RegisterFormInput = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
  &:focus {
    outline: 1px solid;
  }
`;

export const RegisterButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background-color: teal;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;
`;

export const RegisterLoginButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  color: white;
  background-color: lightcoral;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 10px;
`;

export const ErrorContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const Error = styled.span`
  color: red;
`;

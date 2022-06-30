import styled from "styled-components";

export const LoginContainer = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsvUWo78Nhwg3RyK1fs3YhuiEhrlZW80dBw&usqp=CAU");
  background-size: cover;
  align-items: center;
`;

export const LoginTitle = styled.span`
  font-size: 50px;
`;

export const LoginForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const LoginFormLabel = styled.label`
  margin: 10px 0;
`;

export const LoginFormInput = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
  &:focus {
    outline: 1px solid;
  }
`;

export const LoginButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background-color: lightcoral;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;
  &:disabled {
    cursor: not-allowed;
    background-color: rgb(252, 173, 173);
  }
`;

export const LoginRegisterButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  color: white;
  background-color: teal;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 10px;
`;

import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  margin: 100px 300px;
  flex-direction: row;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const ProfilePhoto = styled.img`
  align-content: space-between;
  width: 30%;
`;

export const ProfileInfo = styled.div`
  align-content: space-between;
  width: 70%;
`;

export const ProfileUsername = styled.h1`
  padding-left: 50px;
`;

export const ProfileEmail = styled.h3`
  padding-top: 10px;
  padding-left: 50px;
`;

export const ProfileAbout = styled.div`
  font-size: 20px;
  margin-left: 50px;
  margin-top: 20px;
  height: 227px;
  overflow: auto;
`;

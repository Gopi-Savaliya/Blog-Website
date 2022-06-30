import React, { useContext } from "react";
import { Context } from "../../context/Context";
import {
  AboutContainer,
  ProfileAbout,
  ProfileEmail,
  ProfileInfo,
  ProfilePhoto,
  ProfileUsername,
} from "./About.styled";

export const About = () => {
  const { user } = useContext(Context);
  const imagePath = `${process.env.REACT_APP_IMAGE_URL}/`;
  return (
    <AboutContainer>
      <ProfilePhoto
        src={
          user.profilePic
            ? imagePath + user.profilePic
            : imagePath + "Profile.png"
        }
        alt="Profile Photo"
      />
      <ProfileInfo>
        <ProfileUsername>{user.username}</ProfileUsername>
        <ProfileEmail>{user.email}</ProfileEmail>
        <ProfileAbout data-testid="UserDescription">
          {user.description}
        </ProfileAbout>
      </ProfileInfo>
    </AboutContainer>
  );
};

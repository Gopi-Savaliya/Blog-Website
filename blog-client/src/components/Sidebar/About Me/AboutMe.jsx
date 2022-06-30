import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { SidebarItemContainer, SidebarTitle } from "../Sidebar.styled";
import { AboutMeContent, Img } from "./AboutMe.styled";

export const AboutMe = () => {
  const { user } = useContext(Context);
  const imagePath = `${process.env.REACT_APP_IMAGE_URL}/`;
  return (
    <SidebarItemContainer>
      <SidebarTitle>ABOUT ME</SidebarTitle>
      <Img
        src={user.profilePic
          ? imagePath + user.profilePic
          : imagePath + "Profile.png"}
        alt="About Me"
      />
      <AboutMeContent data-testid="AboutMeContent">
        {user.description}
      </AboutMeContent>
    </SidebarItemContainer>
  );
};

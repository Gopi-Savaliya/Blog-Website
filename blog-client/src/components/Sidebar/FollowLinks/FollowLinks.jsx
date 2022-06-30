import React from "react";
import { SidebarItemContainer, SidebarTitle } from "../Sidebar.styled";
import { SocialIcons, SocialLinks } from "./FollowLinks.styled";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export const FollowLinks = () => {
  return (
    <SidebarItemContainer>
      <SidebarTitle>FOLLOW US</SidebarTitle>
      <SocialLinks>
        <SocialIcons>
          <FaFacebookSquare data-testid="FacebookLink" />
        </SocialIcons>
        <SocialIcons>
          <FaTwitterSquare data-testid="TwitterLink" />
        </SocialIcons>
        <SocialIcons>
          <FaPinterestSquare data-testid="PiterestLink" />
        </SocialIcons>
        <SocialIcons>
          <FaInstagramSquare data-testid="InstagramLink" />
        </SocialIcons>
      </SocialLinks>
    </SidebarItemContainer>
  );
};

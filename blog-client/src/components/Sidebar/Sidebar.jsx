import React from "react";
import { AboutMe } from "./About Me/AboutMe";
import { Categories } from "./Categories/Categories";
import { FollowLinks } from "./FollowLinks/FollowLinks";
import { SidebarContainer } from "./Sidebar.styled";

export const Sidebar = () => {
  return (
    <SidebarContainer data-testid="SidebarContainer">
      <AboutMe />
      <Categories />
      <FollowLinks />
    </SidebarContainer>
  );
};

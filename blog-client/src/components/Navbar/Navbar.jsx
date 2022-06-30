import React, { useContext } from "react";
import { Context } from "../../context/Context";
import {
  ListContainer,
  Logo,
  LogoContainer,
  Nav,
  NavList,
  NavListItem,
  ProfileContainer,
  ProfileImg,
  SearchIcon,
  NavLink,
} from "./Navbar.styled";

export const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const imagePath = `${process.env.REACT_APP_IMAGE_URL}/`;

  const onLogoutHandler = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Nav>
      <LogoContainer>
        <Logo
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMO_h-Q6ea9bHuRFrZRYIbHyuafsCGTRAUQ&usqp=CAU"
          alt="Blog App"
        />
      </LogoContainer>

      <ListContainer>
        <NavList>
          <NavListItem>
            <NavLink to="/">HOME</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/about">ABOUT</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/write">WRITE</NavLink>
          </NavListItem>
          <NavListItem onClick={onLogoutHandler}>
            {user && "LOGOUT"}
          </NavListItem>
        </NavList>
      </ListContainer>

      <ProfileContainer>
        {user ? (
          <NavLink to="/settings">
            <ProfileImg
              src={
                user.profilePic
                  ? imagePath + user.profilePic
                  : imagePath + "Profile.png"
              }
              alt="Profile"
            />
          </NavLink>
        ) : (
          <NavList>
            <NavListItem>
              <NavLink to="/register">REGISTER</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/login">LOGIN</NavLink>
            </NavListItem>
          </NavList>
        )}
        <SearchIcon role="search" />
      </ProfileContainer>
    </Nav>
  );
};

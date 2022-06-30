import React from "react";
import {
  HeaderContainer,
  HeaderImg,
  LargeTitle,
  SmallTitle,
  TitleContainer,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <SmallTitle>Welcome To The</SmallTitle>
        <LargeTitle>Blog</LargeTitle>
      </TitleContainer>
      <HeaderImg
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="HeaderImage"
      />
    </HeaderContainer>
  );
};

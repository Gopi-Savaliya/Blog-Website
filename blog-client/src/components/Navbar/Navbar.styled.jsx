import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  font-family: Poppins, Calibri, sans-serif;
  z-index: 1;
`;

export const LogoContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 45px;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  flex: 6;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavListItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  color: #666;
`;

export const ProfileContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
  cursor: pointer;
`;

export const SearchIcon = styled(FaSearch)`
  font-size: 18px;
  color: #666;
  cursor: pointer;
  margin-left: 15px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

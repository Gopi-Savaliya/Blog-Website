import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "../../Navbar/Navbar.styled";
import { SidebarItemContainer, SidebarTitle } from "../Sidebar.styled";
import { CategoryList, CategoryListItem } from "./Categories.styled";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = () => {
      try {
        axios
          .get(`${process.env.REACT_APP_API_URL}/categories`)
          .then((res) => {
            setCategories(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <SidebarItemContainer>
      <SidebarTitle>CATEGORIES</SidebarTitle>
      <CategoryList data-testid="CategoryList">
        {categories?.map((category) => (
          <CategoryListItem key={category._id}>
            <NavLink to={`/?category=${category._id}`}>
              {category.name}
            </NavLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </SidebarItemContainer>
  );
};

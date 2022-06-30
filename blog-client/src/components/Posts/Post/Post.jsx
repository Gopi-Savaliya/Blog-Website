import React, { useState } from "react";
import {
  PostCategory,
  PostContainter,
  PostDate,
  PostDescription,
  PostImg,
  PostInfo,
  PostTitle,
} from "./Post.styled";
import { NavLink } from "../../Navbar/Navbar.styled";
import axios from "axios";

export const Post = ({ post }) => {
  const imagePath = `${process.env.REACT_APP_IMAGE_URL}/`;
  const [category, setCategory] = useState(null);
  if (post.category) {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories/${post.category}`)
        .then((res) => res.data && setCategory(res.data.name));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <PostContainter data-testid="PostContainter">
      <PostImg
        src={post.photo ? imagePath + post.photo : imagePath + "Post.jpeg"}
        alt="PostImage"
      />
      <PostInfo>
        {post.category && (
          <PostCategory data-testid="Category">{category}</PostCategory>
        )}
        <NavLink to={`/post/${post._id}`}>
          <PostTitle>{post.title}</PostTitle>
        </NavLink>
        <PostDate>{new Date(post.createdAt).toDateString()}</PostDate>
      </PostInfo>
      <PostDescription data-testid="PostDescription">
        {post.desc}
      </PostDescription>
    </PostContainter>
  );
};

import React from "react";
import { Post } from "./Post/Post";
import { PostsContainer } from "./Posts.styled";

export const Posts = ({ posts }) => {
  return (
    <PostsContainer data-testid="PostsContainer">
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </PostsContainer>
  );
};

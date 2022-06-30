import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { SinglePost } from "../../components/SinglePost/SinglePost";
import { PostInfoContainer } from "./PostInfo.styled";
import { useLocation } from "react-router";
import axios from "axios";

export const PostInfo = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/posts/` + postId)
        .then((res) => {
          setPost(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [postId]);

  return (
    <PostInfoContainer>
      <SinglePost
        post={post}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
      />
      <Sidebar />
    </PostInfoContainer>
  );
};

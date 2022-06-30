import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Posts } from "../../components/Posts/Posts";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { HomeContainer } from "./Home.styled";
import axios from "axios";
import { useLocation } from "react-router";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = () => {
      try{
      axios
        .get(`${process.env.REACT_APP_API_URL}/posts` + search)
        .then((res) => {
          setPosts(res.data);
        });
      }catch(err){
        console.log(err);
      }
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <HomeContainer>
        <Posts posts={posts} />
        <Sidebar />
      </HomeContainer>
    </>
  );
};

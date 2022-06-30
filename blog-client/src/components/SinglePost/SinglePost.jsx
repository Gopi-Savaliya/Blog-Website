import React, { useContext, useState } from "react";
import {
  SinglePostAuthor,
  SinglePostCategory,
  SinglePostContainer,
  SinglePostDate,
  SinglePostDescription,
  SinglePostDescriptionInput,
  SinglePostEdit,
  SinglePostIcon,
  SinglePostImageFileInput,
  SinglePostImageIcon,
  SinglePostImg,
  SinglePostInfo,
  SinglePostTitle,
  SinglePostTitleInput,
  SinglePostUpdateButton,
  SinglePostWrapper,
} from "./SinglePost.styled";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { NavLink } from "../Navbar/Navbar.styled";
import { Context } from "../../context/Context";
import { useEffect } from "react";
import { Hovertext, Tooltip } from "../../App.styled";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownIcon,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "../../pages/Write/Write.styled";

export const SinglePost = ({ post, updateMode, setUpdateMode }) => {
  const imagePath = `${process.env.REACT_APP_IMAGE_URL}/`;
  const { user } = useContext(Context);
  const [editPost, setEditPost] = useState({
    title: post.title,
    desc: post.desc,
    photo: post.photo,
    category: post.category,
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);
  const [selectedOption, setSelectedOption] = useState(null);

  if (post.category) {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories/${post.category}`)
        .then((res) => setCategory(res.data.name));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    try {
      axios.get(`${process.env.REACT_APP_API_URL}/categories`).then((res) => {
        setCategories(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setSelectedOption(category);
  }, [category]);

  useEffect(() => {
    setEditPost({
      title: post.title,
      desc: post.desc,
      photo: post.photo,
      category: post.category,
    });
  }, [post]);

  const onOptionClicked = (category) => () => {
    setSelectedOption(category.name);
    setEditPost({
      ...editPost,
      category: category._id,
    });
    setIsDropDownOpen(false);
  };

  const onDeleteHandler = () => {
    try {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/posts/` + post._id, {
          data: { username: user.username },
        })
        .then(() => window.location.replace("/"));
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeHandler = (e) => {
    setEditPost({
      ...editPost,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdateHandler = () => {
    if (photoFile) {
      const data = new FormData();
      const filename = Date.now() + photoFile.name;
      data.append("name", filename);
      data.append("file", photoFile);
      editPost.photo = filename;
      try {
        axios
          .post(`${process.env.REACT_APP_API_URL}/upload`, data)
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    }
    try {
      axios
        .put(`${process.env.REACT_APP_API_URL}/posts/` + post._id, {
          username: user.username,
          title: editPost.title,
          desc: editPost.desc,
          photo: editPost.photo,
          category: editPost.category,
        })
        .then(() => {
          setUpdateMode(false);
          window.location.reload();
          window.URL.revokeObjectURL();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SinglePostContainer data-testid="SinglePostContainer">
      <SinglePostWrapper data-testid="SinglePostWrapper">
        <SinglePostImg
          src={
            photoFile && photoFile !== post.photo
              ? window.URL.createObjectURL(photoFile)
              : post.photo
              ? imagePath + post.photo
              : imagePath + "Post.jpeg"
          }
          alt="SinglePostImage"
        />
        {updateMode ? (
          <>
            <label htmlFor="fileInput" data-testid="PPIcon">
              <Tooltip role="tooltip" style={{ float: "right" }}>
                <SinglePostImageIcon />
                <Hovertext>Edit Photo</Hovertext>
              </Tooltip>
            </label>
            <SinglePostImageFileInput
              type="file"
              id="fileInput"
              data-testid="SinglePostImageFileInput"
              name="photo"
              onChange={(e) => setPhotoFile(e.target.files[0])}
            />
            <SinglePostTitleInput
              type="text"
              name="title"
              placeholder="title"
              value={editPost.title}
              onChange={onChangeHandler}
              autoFocus
              required
            />
          </>
        ) : (
          <SinglePostTitle data-testid="SinglePostTitle">
            {post.title}
            {post.username === user.username && (
              <SinglePostEdit>
                <SinglePostIcon
                  data-testid="SinglePostEditIcon"
                  onClick={() => setUpdateMode(true)}
                >
                  <Tooltip role="tooltip">
                    <FaRegEdit />
                    <Hovertext>Edit Post</Hovertext>
                  </Tooltip>
                </SinglePostIcon>
                <SinglePostIcon
                  data-testid="SinglePostDeleteIcon"
                  onClick={onDeleteHandler}
                >
                  <Tooltip role="tooltip">
                    <RiDeleteBin6Line />
                    <Hovertext>Delete Post</Hovertext>
                  </Tooltip>
                </SinglePostIcon>
              </SinglePostEdit>
            )}
          </SinglePostTitle>
        )}
        <SinglePostInfo>
          {updateMode ? (
            <DropDownContainer data-testid="Dropdown">
              <DropDownHeader onClick={toggleDropDown}>
                {selectedOption || "Categories"}
                <DropDownIcon />
              </DropDownHeader>
              {isDropDownOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    {categories &&
                      categories.map((category) => (
                        <ListItem
                          onClick={onOptionClicked(category)}
                          key={category._id}
                        >
                          {category.name}
                        </ListItem>
                      ))}
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
          ) : (
            post.category && (
              <SinglePostCategory data-testid="Category">
                Category:{" "}
                <NavLink to={`/?category=${post.category}`}>
                  <b>{category}</b>
                </NavLink>
              </SinglePostCategory>
            )
          )}

          <SinglePostAuthor data-testid="SinglePostAuthor">
            Author:{" "}
            <NavLink to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </NavLink>
          </SinglePostAuthor>
        </SinglePostInfo>
        {updateMode ? (
          <SinglePostDescriptionInput
            type="text"
            name="desc"
            placeholder="description"
            value={editPost.desc}
            onChange={onChangeHandler}
            required
          />
        ) : (
          <SinglePostDescription>{post.desc}</SinglePostDescription>
        )}
        <SinglePostDate>
          {new Date(post.createdAt).toDateString()}
        </SinglePostDate>
        {updateMode && (
          <SinglePostUpdateButton onClick={onUpdateHandler}>
            Update
          </SinglePostUpdateButton>
        )}
      </SinglePostWrapper>
    </SinglePostContainer>
  );
};

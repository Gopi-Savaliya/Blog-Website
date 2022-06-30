import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import {
  DisplayGroup,
  DropDownContainer,
  DropDownHeader,
  DropDownIcon,
  DropDownList,
  DropDownListContainer,
  ListItem,
  WriteFileInput,
  WriteForm,
  WriteFormGroup,
  WriteIcon,
  WriteImg,
  WriteLabel,
  WritePageContainer,
  WriteSubmit,
  WriteTextArea,
  WriteTitleInput,
} from "./Write.styled";
import { Hovertext, Tooltip } from "../../App.styled";
import { useEffect } from "react";

export const Write = () => {
  const [writePost, setWritePost] = useState({
    title: "",
    desc: "",
    file: null,
    category: null,
  });
  const { user } = useContext(Context);
  const imagePath = `${process.env.REACT_APP_IMAGE_URL}/`;
  const [categories, setCategories] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    try {
      axios.get(`${process.env.REACT_APP_API_URL}/categories`).then((res) => {
        setCategories(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onOptionClicked = (category) => () => {
    setSelectedOption(category.name);
    setWritePost({
      ...writePost,
      category: category._id,
    });
    setIsDropDownOpen(false);
  };

  const onChangeHandler = (event) => {
    setWritePost({
      ...writePost,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title: writePost.title,
      desc: writePost.desc,
      category: writePost.category,
    };
    if (writePost.file) {
      const data = new FormData();
      const filename = Date.now() + writePost.file.name;
      data.append("name", filename);
      data.append("file", writePost.file);
      newPost.photo = filename;
      axios
        .post(`${process.env.REACT_APP_API_URL}/upload`, data)
        .catch((err) => console.log(err));
    }
    try {
      axios
        .post(`${process.env.REACT_APP_API_URL}/posts`, newPost)
        .then((res) => {
          window.location.replace("/post/" + res.data._id);
          window.URL.revokeObjectURL();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WritePageContainer>
      <WriteImg
        src={
          writePost.file
            ? window.URL.createObjectURL(writePost.file)
            : imagePath + "Post.jpeg"
        }
        alt="WriteImage"
      />
      <WriteForm onSubmit={onSubmitHandler}>
        <WriteFormGroup>
          <DisplayGroup>
            <WriteLabel
              htmlFor="fileInput"
              data-testid="WriteAddIcon"
              style={{ cursor: "pointer" }}
            >
              <Tooltip role="tooltip">
                <WriteIcon />
                <Hovertext>Add Post Image</Hovertext>
              </Tooltip>
            </WriteLabel>
            <WriteFileInput
              type="file"
              id="fileInput"
              data-testid="WriteFileInput"
              name="file"
              onChange={(e) => {
                setWritePost({
                  ...writePost,
                  [e.target.name]: e.target.files[0],
                });
              }}
            />
            <WriteTitleInput
              type="text"
              placeholder="Title"
              autoFocus={true}
              name="title"
              onChange={onChangeHandler}
            />
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
          </DisplayGroup>
        </WriteFormGroup>
        <WriteFormGroup>
          <WriteTextArea
            placeholder="Tell your story..."
            type="text"
            name="desc"
            onChange={onChangeHandler}
          ></WriteTextArea>
        </WriteFormGroup>
        <WriteFormGroup>
          <WriteSubmit type="submit">Publish</WriteSubmit>
        </WriteFormGroup>
      </WriteForm>
    </WritePageContainer>
  );
};

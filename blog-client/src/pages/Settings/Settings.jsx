import axios from "axios";
import React, { useContext, useState } from "react";
import { Hovertext, Tooltip } from "../../App.styled";
import { Context } from "../../context/Context";
import {
  SettingDeleteTitle,
  SettingsContainer,
  SettingsFileInput,
  SettingsForm,
  SettingsFormInput,
  SettingsFormLabel,
  SettingsFormTextArea,
  SettingsPP,
  SettingsPPIcon,
  SettingsPPImg,
  SettingsSubmit,
  SettingsTitle,
  SettingsWrapper,
  SettingUpdateTitle,
  SuccessMessageSpan,
} from "./Settings.styled";

export const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [profileData, setProfileData] = useState({
    username: user.username,
    email: user.email,
    password: "",
    profilePic: null,
    description: user.description,
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const imagePath = `${process.env.REACT_APP_IMAGE_URL}/`;

  const onChangeHandler = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
    console.log(profileData);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "USERUPDATE_START" });
    const updatedProfile = {
      userId: user._id,
      username: profileData.username,
      email: profileData.email,
      description: profileData.description,
    };
    if (profileData.password !== "") {
      updatedProfile.password = profileData.password;
    }
    if (profileData.profilePic) {
      const data = new FormData();
      const filename = Date.now() + profileData.profilePic.name;
      data.append("name", filename);
      data.append("file", profileData.profilePic);
      updatedProfile.profilePic = filename;
      axios
        .post(`${process.env.REACT_APP_API_URL}/upload`, data)
        .catch((err) => console.log(err));
    }
    try {
      axios
        .put(
          `${process.env.REACT_APP_API_URL}/users/` + user._id,
          updatedProfile
        )
        .then((res) => {
          setSuccessMessage(true);
          setTimeout(() => {
            setSuccessMessage(false);
          }, 3000);
          dispatch({ type: "USERUPDATE_SUCCESS", payload: res.data });
          console.log(user);
          setProfileData({
            ...profileData,
            password: "",
            profilePic: null,
          });
          window.URL.revokeObjectURL();
        })
        .catch(() => dispatch({ type: "USERUPDATE_FAILURE" }));
    } catch (err) {
      console.log(err);
    }
  };

  const onDeleteHandler = () => {
    try {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/users/` + user._id, {
          data: { userId: user._id },
        })
        .then(() => {
          dispatch({ type: "LOGOUT" });
          window.location.replace("/");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SettingsContainer>
      <SettingsWrapper>
        <SettingsTitle>
          <SettingUpdateTitle>Update Your Account</SettingUpdateTitle>
          <SettingDeleteTitle onClick={onDeleteHandler}>
            Delete Account
          </SettingDeleteTitle>
        </SettingsTitle>
        <SettingsForm onSubmit={onSubmitHandler}>
          {successMessage && (
            <SuccessMessageSpan>Profile has been updated...</SuccessMessageSpan>
          )}
          <SettingsFormLabel>Profile Picture</SettingsFormLabel>
          <SettingsPP>
            <SettingsPPImg
              src={
                profileData.profilePic
                  ? window.URL.createObjectURL(profileData.profilePic)
                  : user.profilePic
                  ? imagePath + user.profilePic
                  : imagePath + "Profile.png"
              }
              alt="ProfilePhoto"
            />
            <Tooltip role="tooltip">
              <label htmlFor="fileInput" data-testid="PPIcon">
                <SettingsPPIcon />
                <Hovertext style={{ marginLeft: "-45px" }}>
                  Edit Profile Photo
                </Hovertext>
              </label>
            </Tooltip>
            <SettingsFileInput
              type="file"
              id="fileInput"
              data-testid="PPFileInput"
              name="profilePic"
              onChange={(e) => {
                setProfileData({
                  ...profileData,
                  [e.target.name]: e.target.files[0],
                });
              }}
            />
          </SettingsPP>
          <SettingsFormLabel>Username</SettingsFormLabel>
          <SettingsFormInput
            type="text"
            placeholder="Safari"
            name="username"
            value={profileData.username}
            onChange={onChangeHandler}
            required
          />
          <SettingsFormLabel>Email</SettingsFormLabel>
          <SettingsFormInput
            type="email"
            placeholder="safari@gmail.com"
            name="email"
            value={profileData.email}
            onChange={onChangeHandler}
            required
          />
          <SettingsFormLabel>Password</SettingsFormLabel>
          <SettingsFormInput
            type="password"
            placeholder="password"
            name="password"
            onChange={onChangeHandler}
          />
          <SettingsFormLabel>About Me</SettingsFormLabel>
          <SettingsFormTextArea
            placeholder="About Me..."
            name="description"
            onChange={onChangeHandler}
            value={profileData.description}
          />
          <SettingsSubmit type="submit">Update</SettingsSubmit>
        </SettingsForm>
      </SettingsWrapper>
    </SettingsContainer>
  );
};

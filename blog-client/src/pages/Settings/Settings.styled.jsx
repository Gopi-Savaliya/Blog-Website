import styled from "styled-components";
import { CgProfile } from "react-icons/cg";

export const SettingsContainer = styled.div`
  display: flex;
  margin: 0 150px;
`;

export const SettingsWrapper = styled.div`
  flex: 9;
  padding: 10px 120px 0 120px;
`;

export const SettingsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SettingUpdateTitle = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
  color: lightcoral;
`;

export const SettingDeleteTitle = styled.span`
  font-size: 14px;
  color: red;
  cursor: pointer;
  &:hover {
    color: #be9656;
  }
`;

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SettingsPP = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const SettingsPPImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  object-fit: cover;
`;

export const SettingsPPIcon = styled(CgProfile)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: lightcoral;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
`;

export const SettingsFileInput = styled.input`
  display: none;
`;

export const SettingsFormLabel = styled.label`
  font-size: 20px;
  margin-top: 20px;
`;

export const SettingsFormInput = styled.input`
  color: gray;
  margin: 10px 0;
  height: 30px;
  border: none;
  border-bottom: 1px solid lightgray;
  &:focus {
    outline: none;
  }
`;

export const SettingsFormTextArea = styled.textarea`
  color: gray;
  margin: 10px 0;
  height: 10vh;
  resize: vertical;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

export const SettingsSubmit = styled.button`
  width: 150px;
  align-self: center;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: teal;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
`;

export const SuccessMessageSpan = styled.span`
  color: green;
  align-self: center;
  margin: 20px 0;
`;

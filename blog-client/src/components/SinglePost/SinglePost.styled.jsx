import styled from "styled-components";
import { MdEdit } from "react-icons/md";

export const SinglePostContainer = styled.div`
  flex: 9;
`;

export const SinglePostWrapper = styled.div`
  padding: 20px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
`;

export const SinglePostImg = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 5px;
  object-fit: cover;
`;

export const SinglePostImageIcon = styled(MdEdit)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: grey;
  color: white;
  cursor: pointer;
  padding: 5px;
  margin: 2px;
  float: right;
`;

export const SinglePostImageFileInput = styled.input`
  display: none;
`;

export const SinglePostCategory = styled.span`
  font-family: Varela Round, Arial, Helvetica, sans-serif;
  color: #be9656;
  line-height: 20px;
  cursor: pointer;
`;

export const SinglePostTitle = styled.h1`
  text-align: center;
  margin: 10px;
  font-family: Lora, serif;
  font-size: 32px;
`;

export const SinglePostTitleInput = styled.input`
  text-align: center;
  margin: 10px;
  font-family: Lora, serif;
  font-size: 32px;
  border: none;
  border-bottom: 1px solid lightgray;
  color: #666;
  &:focus {
    outline: none;
  }
`;

export const SinglePostEdit = styled.div`
  float: right;
  font-size: 18px;
`;

export const SinglePostIcon = styled.div`
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
  &:first-child {
    color: teal;
  }
  &:last-child {
    color: tomato;
  }
`;

export const SinglePostInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-family: Varela Round, sans-serif;
  color: #b39656;
`;

export const SinglePostAuthor = styled.span``;

export const SinglePostDate = styled.span`
  color: #999;
  font-family: Lora, serif;
  font-style: italic;
  align-self: flex-end;
  margin-top: 50px;
`;

export const SinglePostDescription = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 25px;
  &:first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;

export const SinglePostDescriptionInput = styled.textarea`
  color: #666;
  font-size: 18px;
  line-height: 25px;
  border: none;
  height: 20vh;
  resize: vertical;
  &:focus {
    outline: none;
  }
`;

export const SinglePostUpdateButton = styled.button`
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: teal;
  padding: 5px;
  color: white;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20px;
`;

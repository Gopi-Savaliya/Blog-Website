import styled from "styled-components";
import { BsPlus } from "react-icons/bs";
import { BsCaretDownSquareFill } from "react-icons/bs";

export const WritePageContainer = styled.div`
  padding-top: 50px;
`;

export const WriteImg = styled.img`
  margin-left: 150px;
  width: 70vw;
  height: 300px;
  border-radius: 10px;
`;

export const WriteForm = styled.form``;

export const WriteFormGroup = styled.div`
  margin-left: 150px;
  display: flex;
  align-items: center;
`;

export const DisplayGroup = styled.div`
  display: flex;
`;

export const WriteLabel = styled.label`
  cursor: pointer;
  margin: auto;
  flex: 0.2;
`;

export const WriteIcon = styled(BsPlus)`
  width: 25px;
  height: 25px;
  border: 1px solid;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgb(121, 118, 118);
  cursor: pointer;
`;

export const WriteFileInput = styled.input`
  display: none;
`;

export const WriteTitleInput = styled.input`
  font-size: 30px;
  border: none;
  padding: 20px;
  width: 60vw;
  flex: 5;
  &:focus {
    outline: none;
  }
`;

export const DropDownContainer = styled.div`
  width: 10.5em;
  position: relative;
  display: inline-block;
  margin: auto;
  flex: 2;
`;
export const DropDownHeader = styled.div`
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  color: rgb(121, 118, 118);
  border: 2px solid #e5e5e5;
  background: #fff;
  border-radius: 10px;
  cursor: pointer;
  width: 125px;
`;

export const DropDownIcon = styled(BsCaretDownSquareFill)`
  float: right;
  margin-right: -30px;
`;
export const DropDownListContainer = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  border-radius: 2px;
  min-width: 160px;
  padding: 12px 16px;
  z-index: 1;
  display: block;
`;
export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 2px;
  box-sizing: border-box;
  color: rgb(121, 118, 118);
  font-size: 1.3rem;
  font-weight: 500;
`;
export const ListItem = styled.li`
  list-style: none;
  padding-top: 8px;
  padding-left: 1rem;
  height: 2rem;
  cursor: pointer;
  &:hover{
    background-color: #D3D3D3;
  }
`;

export const WriteTextArea = styled.textarea`
  font-size: 20px;
  border: none;
  padding: 20px;
  width: 70vw;
  height: 15vh;
  resize: vertical;
  &:focus {
    outline: none;
  }
`;

export const WriteSubmit = styled.button`
  color: white;
  background-color: teal;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;

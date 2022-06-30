import styled from "styled-components";

export const Hovertext = styled.p`
  visibility: hidden;
  height: 15px;
  width: 100px;
  bottom: 100%;
  left: 50%;
  margin-left: -50px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  font-size: 12px;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${Hovertext} {
    visibility: visible;
  }
`;

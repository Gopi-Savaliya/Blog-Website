import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin-top: 60px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Lora, serif;
  color: #444;
`;

export const SmallTitle = styled.span`
  position: absolute;
  top: 18%;
  font-size: 20px;
`;

export const LargeTitle = styled.span`
  position: absolute;
  top: 20%;
  font-size: 100px;
`;

export const HeaderImg = styled.img`
  width: 100%;
  height: 500px;
  margin-top: 100px;
  object-fit: cover;
`;

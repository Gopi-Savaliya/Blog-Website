import styled from "styled-components";

export const PostContainter = styled.div`
  width: 385px;
  margin: 0px 25px 40px 25px;
`;

export const PostImg = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostCategory = styled.span`
  font-family: Varela Round, Arial, Helvetica, sans-serif;
  font-size: 11px;
  color: #be9656;
  line-height: 20px;
  cursor: pointer;
`;

export const PostTitle = styled.span`
  font-family: Lora, serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
`;

export const PostDate = styled.span`
  font-family: Lora, serif;
  font-style: italic;
  font-size: 13px;
  color: #999;
  margin-top: 15px;
`;

export const PostDescription = styled.p`
  font-family: Varela Round, sans-serif;
  font-size: 14px;
  color: #444;
  line-height: 24px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

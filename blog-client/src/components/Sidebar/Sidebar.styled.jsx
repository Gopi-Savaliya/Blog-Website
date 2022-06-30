import styled from "styled-components";

export const SidebarContainer = styled.div`
  flex: 3;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarTitle = styled.span`
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: solid 1px #a7a4a4;
  border-bottom: solid 1px #a7a4a4;
  font-family: Varela Round, sans-serif;
  font-size: 12px;
  color: #222;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`;

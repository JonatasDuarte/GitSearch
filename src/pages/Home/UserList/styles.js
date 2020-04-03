import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 16px;
  height: 400px;
  width: 350px;
  overflow-y: auto;

  & > li + li {
    margin-top: 4px;
  }
`;

export const User = styled.li`
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  align-items: center;

  border-radius: 24px;
  height: 48px;

  :hover {
    background: #ddd;
  }
`;

export const Login = styled.strong`
  color: #666;
  margin-left: 12px;
`;

export const Avatar = styled.img`
  border-radius: 20px;
  margin: 4px;
  height: 40px;
  width: 40px;
`;

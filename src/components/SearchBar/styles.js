import styled from 'styled-components';

export const Container = styled.form`
  display: flex; {/* container vertical ou horizontal */}
  flex-direction: row;

  align-items: center;
  height: 40px;
  width: 350px;

  border: 1px solid #ddd;
  border-radius: 20px;

  & > svg {
    margin-left: 12px;
  }
`;

export const Input = styled.input`
  flex: 1;

  border: none;
  background: none;
  height: 40px;
  color: #333;

  padding-left: 12px;

  ::placeholder {
    color: #666;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  border-radius: 20px;
  margin: 1;
  height: 39px;
  width: 39px;

  :hover {
    background: #ddd;
  } 
`;
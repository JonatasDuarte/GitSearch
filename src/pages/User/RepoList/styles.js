import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.ul`
overflow-y: auto;
  & > li + li {
    margin-top: 8px;
  }
  width: 100%;
`
;

export const Repo = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 32px 16px;
  :hover {
    background: #ddd;
  }
`;

export const Name = styled.h1`
  color: #333;
`;

export const Forks = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #666;

  svg {
    margin-right: 2px;
  }
`;

export const Des = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
  font-size: 16px;
  color: #666;
`;

export const Language = styled.h3`
  background: #999;
  color: white;
  border-radius: 2px;
  padding: 2px 4px;
  /* text-transform: uppercase; */
`;

export const Star = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  color: #666;

  svg {
    margin-right: 2px;
  }
`;

export const DivHorizontal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    div.ball{
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background: #AAA;
      margin: 0 5px;
    }

`;

export const DivVertical = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  
`;

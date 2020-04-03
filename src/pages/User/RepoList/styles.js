import styled from 'styled-components';

export const Container = styled.ul`
  height: 400px;
  width: 450px;
  overflow-y: auto;

  & > li + li {
    margin-top: 8px;
  }
`;

export const Repo = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  padding: 8px 16px;
  :hover {
    background: #ddd;
  }
`;

export const Name = styled.strong`
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

export const Des = styled.small`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  max-width: 320px;

  color: #666;
`;

export const Language = styled.small`
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

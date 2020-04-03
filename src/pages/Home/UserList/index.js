import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { Container, User, Login, Avatar } from './styles';

export default function UserList({users}) {
  const history = useHistory();

  const handleShowUser = useCallback((username) => {
    history.push(`/user/${username}`);
  }, []);

  return (
    <Container>
      {users.map((user, index) => (
        <User key={index} onClick={() => handleShowUser(user.login)}>
          <Avatar src={user.avatar} />
          <Login>{user.login}</Login>
        </User>
      ))}
    </Container>
  );
}

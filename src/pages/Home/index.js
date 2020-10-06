import React, { useState, useCallback } from "react";

import { Container } from "./styles";

import SearchBar from "../../components/SearchBar";

import {getUserByNickname} from "../../services/api";

import UserList from "./UserList";

import { toast } from "react-toastify";

export default function Home() {
  const [users, setUsers] = useState([]);
  const handleAddUser = useCallback(
    username => {
        getUserByNickname(username)
            .then((res)=>{
                console.log(res);
                setUsers((oldUsers)=>[...oldUsers, {login: res.login, avatar: res.avatar_url}]);
            })
            .catch((err)=> toast.error(err));
    },
    [setUsers]
  );

  return (
    <Container>
      <SearchBar placeholder="Usuário no GitHub" onSubmit={handleAddUser} />
        {users.length > 0 && (<UserList users={users} />)}
    </Container>
  );
}

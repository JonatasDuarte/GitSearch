import React, { useState, useCallback } from "react";

import { Container } from "./styles";

import SearchBar from "../../components/SearchBar";

import api from "../../services/api";

import UserList from "./UserList";

import { toast } from "react-toastify";

export default function Home() {
  const [users, setUsers] = useState([]);

  const handleAddUser = useCallback(
    username => {
      async function searchUser() {
        const { data } = await api.get("search/users", {
          params: {
            q: username
          }
        });

        if (data.total_count === 0) {
          toast.error("Nenhum usuário encontrado");
        } else {
          toast.success(`${data.total_count} usuário(s) encontrado(s)`);

          setUsers(
            data.items.map(user => ({
              login: user.login,
              avatar: user.avatar_url
            }))
          );
        }
      }

      searchUser();
    },
    [users]
  );

  return (
    <Container>
      <SearchBar placeholder="Usuário no GitHub" onSubmit={handleAddUser} />

      <UserList users={users} />
    </Container>
  );
}

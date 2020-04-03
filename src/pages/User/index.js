import React, { useState, useCallback, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

import RepoList from "./RepoList";

export default function User() {
  const { username } = useParams();

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function loadRepos() {
      const { data } = await api.get(`users/${username}/repos`);

      setRepos(
        data.map(repo => ({
          name: repo.name,
          url: repo.hmtl_url,
          des: repo.description,
          language: repo.language,
          star: repo.stargazers_count,
          forks: repo.forks_count,
        }))
      );
    }

    loadRepos();
  }, [username]);

  return(  
    <Container> 

      <RepoList repos={repos}/>

    </Container>
  );
  
}
},


//git add .
// git commit -m "initial commit"
// git remote add origin https://github.com/jarthursantos/jarthursantostest.git
// git push -u origin master
// git push

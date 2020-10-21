import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import {getUserRepos} from '../../services/api';

import { Container } from './styles';

import RepoList from "./RepoList";

export default function User() {
  const { username } = useParams();

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUserRepos(username).then((res)=>{
        setRepos(
            res.map(repo => ({
                name: repo.name,
                url: repo.html_url,
                des: repo.description,
                language: repo.language,
                star: repo.stargazers_count,
                forks: repo.forks_count,
              }))
        )
    })
  }, [username]);

  return(  
    <Container> 

      <RepoList repos={repos}/>

    </Container>
  );
  
}
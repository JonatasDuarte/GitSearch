import React, { useCallback } from 'react';
import { Container, Repo, Name, Des, Language, Star, Forks} from './styles';

import { MdStar, MdCallSplit } from 'react-icons/md';

export default function RepoList({repos}){
    const handleShowRepo = useCallback(
      link => {
        window.open(link, '_blank');
      },
      [username]
    );
    
    return (
      <Container>
        {repos.map((repo, index) => (
          <Repo key={index} onClick={() => handleShowRepo(repo.url)}>
            <Name>{repo.name}</Name> 
            <Des>{repo.des}</Des>
            <Language>{repo.language}</Language>
            <Star>
              <MdStar size={12} fill="#666" />
              {repo.star}
            </Star>
          
            <Forks>
              <MdCallSplit size={12} fill="#666"/>
              {repo.forsk}</Forks>
          </Repo>
        ))}
      </Container>
    )
  
}

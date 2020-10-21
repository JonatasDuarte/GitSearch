import React, { useCallback } from 'react';
import {
  Container,
  Repo,
  Name,
  Des,
  Language,
  Star,
  Forks,
  DivHorizontal,
  DivVertical,
  Wrapper
} from './styles';

import { MdStar, MdCallSplit } from 'react-icons/md';

export default function RepoList({ repos }) {
  const handleShowRepo = useCallback(link => {
    window.open(link, '_blank');
  }, []);

  return (
    <Container>
      {repos.length > 0 ? (
          <Wrapper>
              {
                  repos.map((repo, index) => (
                    <Repo key={index} onClick={() => handleShowRepo(repo.url)}>
                      <DivVertical>
                        <DivHorizontal>
                          <Name>{repo.name}</Name>
            
                          {repo.language && (
                            <>
                              <div className="ball" />
                              <Language>{repo.language}</Language>
                            </>
                          )}
                        </DivHorizontal>
                        <Des>{repo.des}</Des>
                      </DivVertical>
                      <Star>
                        <MdStar size={16} fill="#666" />
                        {repo.star}
                      </Star>
            
                      <Forks>
                        <MdCallSplit size={16} fill="#666" />
                        {repo.forks}
                      </Forks>
                    </Repo>
                  ))
              }
        </Wrapper>
      ): (<h2>Nenhum repositorio encontrado!</h2>)}
    </Container>
  );
}

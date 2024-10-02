  import React from 'react';
  import { Container, Sidebar, Main } from './style';
  import Profile from './Profile';
  import Filter from './Filter';
  import Repositories from './Repositories';
  import { getLangsFrom } from '../../services/api';

  function RepositoriesPage() {
    const user = {
      login: 'velooso',
      avatar_url: "https://avatars.githubusercontent.com/u/127763531?v=4",
      name: 'Gabriel Veloso',
      company: null,
      location: null,
      blog: "",
      followers: 4,
      following: 4,
    };

  const repositories = [
    {
      id: '1',
      name: 'repo1',
      description: 'descri',
      html_url: 'https://github.com/velooso/projeto-devlinks',
      language: 'JavaScript',
    },
    {
      id: '2',
      name: 'repo2',
      description: 'descri',
      html_url: 'https://github.com/velooso/projeto-devlinks',
      language: 'Java',
    },
    {
      id: '3',
      name: 'repo3',
      description: 'descri',
      html_url: 'https://github.com/velooso/projeto-devlinks',
      language: 'JavaScript',
    },
  ];

    const languages = getLangsFrom(repositories);

    return(
    <Container>
      <Sidebar>
        <Profile user = { user }/>
        <Filter languages = { languages }/>
      </Sidebar>
      <Main>
        <Repositories  repositories = {repositories} />
      </Main>
    </Container>
    );
  }

  export default RepositoriesPage;

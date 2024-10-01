  import React from 'react';
  import { Container, Sidebar, Main } from './style';
  import Profile from './Profile';
  import Filter from './Filter';
  import Repositories from './Repositories';

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

  const repos = [
    {
      name: 'repo1;',
      description: 'descri',
      html_url: 'https://github.com/velooso/projeto-devlinks',
      language: 'JavaScript',
    },
    {
      name: 'repo2;',
      description: 'descri',
      html_url: 'https://github.com/velooso/projeto-devlinks',
      language: 'Java',
    },
    {
      name: 'repo3;',
      description: 'descri',
      html_url: 'https://github.com/velooso/projeto-devlinks',
      language: 'JavaScript',
    },
  ];
console.log(repos)
  //  criar array utilizar map e depois
  //  criar reduce pra cntar as ocorrencias
  const stats = repos
   .map((repository) => repository.language)
   .reduce((data,language) => ({
    ...data,
    [language] : (data[language] || 0) + 1,
   }),
   []
   );

console.log(stats);

  const languages = [
    { name: 'JavaScript', count: '2', color: '#f1c40f'},
    { name: 'PHP', count: '5', color: '#95a5a6'},
    { name: 'Shell', count: '5', color: '#E03131'},
    { name: 'Java', count: '5', color: '#25BEFF'},
    { name: 'Java', count: '5', color: '#25BEFF'},
  ];

    return(
    <Container>
      <Sidebar>
        <Profile user = { user }/>
        <Filter languages = { languages }/>
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
    );
  }

  export default RepositoriesPage;

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
    }
  //   const repositories = [
  //     {
  //     name: 'DevLinks',
  //     description: 'Descrição',
  //     html_url: '',
  //     language: 'JavaScript',
  //   },
  //   {
  //     name: 'Crud',
  //     description: 'Descrição',
  //     html_url: '',
  //     language: 'TypeScript',
  //   },
  //   {
  //     name: 'Banco',
  //     description: 'Descrição',
  //     html_url: '',
  //     language: 'Java',
  //   },
  //   {
  //     name: 'todo-list',
  //     description: 'Descrição',
  //     html_url: '',
  //     language: 'React',
  //   },
  // ]

  const languages = [
    { name: 'JavaScript', count: '2', color: '#f1c40f'},
    { name: 'PHP', count: '5', color: '#95a5a6'},
    { name: 'Shell', count: '5', color: '#E03131'},
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

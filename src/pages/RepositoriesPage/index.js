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

    return(
    <Container>
      <Sidebar>
        <Profile user = { user }/>
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
    );
  }

  export default RepositoriesPage;

  import React, { useState, useEffect } from 'react';
  import { Loading, Container, Sidebar, Main } from './style';
  import Profile from './Profile';
  import Filter from './Filter';
  import Repositories from './Repositories';
  import { getUser, getLangsFrom } from '../../services/api';

  function RepositoriesPage() {
    const [user, setUser] = useState();
    const [currentLanguage, setCurrentLanguage] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadData = async () => {
        const [userResponse] = await Promise.all([getUser('velooso')]);
        setUser(userResponse.data);

        setLoading(false);
      };

      loadData();
    }, []);

    // const user = {
    //   login: 'velooso',
    //   avatar_url: "https://avatars.githubusercontent.com/u/127763531?v=4",
    //   name: 'Gabriel Veloso',
    //   company: null,
    //   location: null,
    //   blog: "",
    //   followers: 4,
    //   following: 4,
    // };

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


    const onFilterClick = (language) => {
      setCurrentLanguage(language);
};



      if(loading){
        return <Loading>Carregando...</Loading>
      };

    return(
    <Container>
      <Sidebar>
        <Profile user = { user }/>
        <Filter languages = { languages }
        currentLanguage={currentLanguage}
        onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
        repositories = {repositories}
        currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
    );
  }

  export default RepositoriesPage;

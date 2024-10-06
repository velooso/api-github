  import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
  import { useParams } from 'react-router-dom';

=======
>>>>>>> 5e7efbcf85b87b21c1f061d1c35d2f03b3c0433b
  import { Loading, Container, Sidebar, Main } from './style';
  import Profile from './Profile';
  import Filter from './Filter';
  import Repositories from './Repositories';
<<<<<<< HEAD
  import { getUser, getRepos, getLangsFrom } from '../../services/api';

  function RepositoriesPage() {

    const { login } = useParams();

    const [user, setUser] = useState();
    const [repositories, setRepositories] = useState();
    const [languages, setLanguages] = useState();
    const [currentLanguage, setCurrentLanguage] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      const loadData = async () => {
        try {
          const [userResponse, repositoriesReponse] = await Promise.all([
            getUser(login),
            getRepos(login),
          ]);
          setUser(userResponse.data);
          setRepositories(repositoriesReponse.data);
          setLanguages(getLangsFrom(repositoriesReponse.data));
        } catch (error) {
          error("Error loading data:", error);
        } finally {
          setLoading(false);
        }
      };      
        loadData();
    }, []);

  const onFilterClick = (language) =>{
      setCurrentLanguage(language);
};

  if(loading){
    return <Loading>Carregando...</Loading>
  };
=======
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
>>>>>>> 5e7efbcf85b87b21c1f061d1c35d2f03b3c0433b

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

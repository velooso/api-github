import { React, useState } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate }  from "react-router-dom";

import { Container, Logo, Title, Form, Input, Button } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg";

function MainPage() {

  const [login, setLogin] = useState("");
  const navigate = useNavigate();

  const onKeyDown = (e) => {
     if(e.key === "Enter"){
      e.preventDefault();
      if(login){
        navigate(`/${login}/repositories`);
      }
    }
  };

  return (
    <Container>
      <Logo src={githubLogo} alt="Github Logo"/>
      <Title>API Github</Title>
      <Form>
        <Input placeholder="usuário"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        onKeyDown={onKeyDown}
        />
        <Button to={`/${login}/repositories`} onClick= {() => login &&navigate(`/${login}/repositories`)}>
          <MdSearch size={32}/>
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;

import React from 'react';
import { MdGroup, MdLink, MdLocationCity, MdWork } from 'react-icons/md';
import { Container, Header, Login, Avatar, Name, Inner, Date } from './style';

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/127763531?v=4" />
        <Login>@guebo</Login>
        <Name>Guebo</Name>
      </Header>
      <Inner>
        <Date>
          <MdGroup size={20} />
          3&nbsp; <i>seguidores</i> &nbsp;&middot;&nbsp; 3&nbsp; <i>seguindo</i>
        </Date>
        <Date>
          <MdWork size={20} />
          Porto
        </Date>
        <Date>
          <MdLocationCity size={20} />
          Sao Luis
        </Date>
        <Date>
          <MdLink size={20} />
          <a href="https://github.com/velooso">veloosodec.com.br</a>
        </Date>
      </Inner>
    </Container>
  );
}

export default Profile;

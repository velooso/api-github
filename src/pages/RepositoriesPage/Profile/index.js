import React from 'react';
import PropTypes from 'prop-types';
import { MdGroup, MdLink, MdLocationCity, MdWork } from 'react-icons/md';
import { Container, Header, Login, Avatar, Name, Inner, Date } from './style';

 function Profile({ user }) {
  return <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Date>
          <MdGroup size={20} />
          {user.followers}&nbsp; <i>seguidores</i> &nbsp;&middot;&nbsp; {user.following}&nbsp; <i>seguindo</i>
        </Date>
        { user.company &&
        <Date>
          <MdWork size={20} />
          {user.company}
        </Date>
        }
        { user.location &&
        <Date>
          <MdLocationCity size={20} />
          {user.location}
        </Date>
        }
        {user.blog &&
        <Date>
          <MdLink size={20} />
          <a href={`\\${user.blog}`}>{user.blog}</a>
        </Date>
        }
      </Inner>
    </Container>
}

  Profile.propTypes = {
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      company: PropTypes.string,
      location: PropTypes.string,
      blog: PropTypes.string,
      followers: PropTypes.number.isRequired,
      following: PropTypes.number.isRequired,
    }).isRequired,
  };

export default Profile;

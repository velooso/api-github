import React from 'react';
import PropTypes from 'prop-types';
import { Container, Name, Description, Footer, Lang, Link } from './style';

function Repository({ repository }) {
  return (
    <Container color='#7E5CEF'>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color='#7E5CEF'>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">VER</Link>
      </Footer>
    </Container>
  )
};

Repository.propTypes ={
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired
}


export default Repository

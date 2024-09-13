import React from 'react';
import { Container, Name, Description, Footer, Lang, Link } from './style';

function Repository() {
  return (
    <Container color='#7E5CEF'>
      <Name>RepoName</Name>
      <Description>RePOdESCR</Description>
      <Footer color='#7E5CEF'>
        <Lang>JS</Lang>
        <Link href="https://www.devmedia.com.br/string-em-java-entendendo-e-utilizando-essa-classe/25503" target="_blank">VER</Link>
      </Footer>
    </Container>
  )
}

export default Repository

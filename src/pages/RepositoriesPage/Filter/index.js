import React from 'react';
import { Container, Selector, Cleaner } from './style';

function Filter() {

  const langs = [
    { name: 'JavaScript', count: '4', color: '#f1c40f'},
    { name: 'PHP', count: '5', color: '#95a5a6'},
    { name: 'Shell', count: '5', color: '#E03131'},
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));


  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  )
}

export default Filter

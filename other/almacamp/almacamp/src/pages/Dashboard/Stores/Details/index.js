import React from 'react';

import { Container, InfoContainer, Label, Info } from './styles';

function Details() {
  return (
    <Container>
      <InfoContainer>
        <Label>Nome</Label>
        <Info>Loja teste 1</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>Número</Label>
        <Info>123123123</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>Oriente</Label>
        <Info>Não entendi</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>Distrito</Label>
        <Info>Federal</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>Região</Label>
        <Info>Industrial</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>Data criação</Label>
        <Info>12/12/12</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>Data edição</Label>
        <Info>12/12/12</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>Status</Label>
        <Info>Nenhum</Info>
      </InfoContainer>
    </Container>
  );
}

Details.navigationOptions = {
  title: 'Loja teste 1',
};

export default Details;

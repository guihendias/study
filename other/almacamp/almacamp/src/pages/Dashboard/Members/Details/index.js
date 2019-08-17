import React from 'react';

import { Container, Avatar, InfoContainer, Label, Info } from './styles';

function Details() {
  return (
    <Container>
      <Avatar
        source={{
          uri: 'https://api.adorable.io/avatars/100/abott@adorable.png',
        }}
      />
      <InfoContainer>
        <Label>Nome</Label>
        <Info>Sérgio Henrique Dias</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>Número Glesp</Label>
        <Info>123123123 Dias</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>E-mail</Label>
        <Info>sergio@gmail.com</Info>
      </InfoContainer>
      <InfoContainer>
        <Label>Fone</Label>
        <Info>(19) 3848-7897</Info>
      </InfoContainer>
    </Container>
  );
}

Details.navigationOptions = {
  title: 'Sérgio Henrique Dias',
};

export default Details;

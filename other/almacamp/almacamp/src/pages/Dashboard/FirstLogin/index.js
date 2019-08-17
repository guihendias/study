import React from 'react';

import {
  Container,
  Header,
  WelcomeText,
  Instructions,
  Form,
  ImageContainer,
  ImageText,
  ImageInput,
  Input,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export default function FirstLogin() {
  return (
    <Container>
      <Header>
        <WelcomeText>Bem vindo</WelcomeText>
        <Instructions>
          Esse é seu primeiro acesso. Para prosseguir, você deve trocar a foto e
          sua senha:
        </Instructions>
      </Header>
      <Form>
        <ImageContainer>
          <ImageText>Foto de perfil</ImageText>
          <ImageInput />
        </ImageContainer>

        <Input placeholder="Digite sua nova senha" />

        <SubmitButton>
          <SubmitButtonText>AVANÇAR</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}

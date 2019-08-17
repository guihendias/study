import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Avatar,
  Input,
  SubmitButton,
  SubmitButtonText,
} from './styles';

function Profile() {
  function handleSubmit() {}

  return (
    <Container>
      <Avatar
        source={{
          uri: 'https://api.adorable.io/avatars/100/abott@adorable.png',
        }}
      />
      <Input placeholder="Número Glesp" />
      <Input placeholder="E-mail" />
      <Input placeholder="Fone" />

      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText>SALVAR ALTERAÇÕES</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}

Profile.navigationOptions = {
  title: 'Meu perfil',
};

export default Profile;

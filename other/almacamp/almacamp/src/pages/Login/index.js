import React from 'react';
import {
  Container,
  LogoContainer,
  Logo,
  Form,
  Input,
  Link,
  LinkText,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import logo from '~/assets/logo_fade.png';

function Login() {
  function handleSubmit() {
    alert('Logou');
  }

  return (
    <Container>
      <LogoContainer>
        <Logo source={logo} />
      </LogoContainer>
      <Form>
        <Input placeholder="Usuário" />
        <Input placeholder="Senha" />
        <Link>
          <LinkText>Esqueci a senha</LinkText>
        </Link>

        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>ENTRAR</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}

Login.navigationOptions = {
  header: null,
};

export default Login;

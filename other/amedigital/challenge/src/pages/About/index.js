import React from 'react';

import {
  Container,
  LogoContainer,
  Logo,
  LogoText,
  Footer,
  DevName,
  Date,
} from './styles';
import Header from '~/components/Header';
import fonts from '~/util/fonts';

function About() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <LogoText>a Lodjinha</LogoText>
      </LogoContainer>
      <Footer>
        <DevName style={fonts.medium}>Guilherme Dias</DevName>
        <Date style={fonts.light}>13 de Agosto de 2019</Date>
      </Footer>
    </Container>
  );
}

About.navigationOptions = {
  header: <Header text="sobre" />,
};

export default About;

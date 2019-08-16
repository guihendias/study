import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Body, Logo, Name, HeaderText } from './styles';
import ButtonMenu from '../ButtonMenu';

function Header({ text, back, navigation }) {
  return (
    <Container>
      <Left>
        {back ? (
          <TouchableOpacity
            style={{
              height: 60,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color="#f2f2f2" />
          </TouchableOpacity>
        ) : (
          <ButtonMenu />
        )}
      </Left>
      <Body>
        {text ? (
          <HeaderText>{text}</HeaderText>
        ) : (
          <>
            <Logo />
            <Name>a Lodjinha</Name>
          </>
        )}
      </Body>
    </Container>
  );
}

export default Header;

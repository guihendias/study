import React from 'react';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import {
  Container,
  Logo,
  CartButton,
  CartIcon,
  CartNumberContainer,
  CartNumber,
} from './styles';

const Header = ({ cartSize, navigation }) => (
  <Container>
    <Logo />
    <CartButton onPress={() => navigation.navigate('Cart')}>
      <CartIcon />
      <CartNumberContainer>
        <CartNumber>{cartSize}</CartNumber>
      </CartNumberContainer>
    </CartButton>
  </Container>
);

export default connect(state => ({
  cartSize: state.cart.length,
}))(withNavigation(Header));

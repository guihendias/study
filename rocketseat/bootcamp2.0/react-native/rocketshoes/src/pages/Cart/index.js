import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../util/format';

import {
  Container,
  ProductList,
  ListItem,
  ProductInfoContainer,
  ProductImage,
  ProductDescriptionContainer,
  ProductTitle,
  ProductPrice,
  DeleteButton,
  TrashIcon,
  SubtotalContainer,
  SubtotalText,
  AmountContainer,
  AmountInput,
  DecrementButton,
  DecrementIcon,
  IncrementButton,
  IncrementIcon,
  Footer,
  FinishButton,
  FinishButtonText,
  TotalContainer,
  TotalText,
  TotalValue,
} from './styles';
import * as cartActions from '../../store/modules/cart/actions';
import Header from '../../components/Header';

const Cart = ({ cart, total, removeFromCart, updateAmountRequest }) => {
  function increment({ id, amount }) {
    updateAmountRequest(id, amount + 1);
  }

  function decrement({ id, amount }) {
    updateAmountRequest(id, amount - 1);
  }

  return (
    <Container>
      <Header />
      {cart.length > 0 ? (
        <ProductList>
          {cart.map(product => (
            <ListItem key={product.id}>
              <ProductInfoContainer>
                <ProductImage
                  source={{ uri: product.image }}
                  alt={product.title}
                />
                <ProductDescriptionContainer>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </ProductDescriptionContainer>
                <DeleteButton onPress={() => removeFromCart(product.id)}>
                  <TrashIcon />
                </DeleteButton>
              </ProductInfoContainer>
              <SubtotalContainer>
                <AmountContainer>
                  <DecrementButton onPress={() => decrement(product)}>
                    <DecrementIcon />
                  </DecrementButton>
                  <AmountInput value={String(product.amount)} />
                  <IncrementButton onPress={() => increment(product)}>
                    <IncrementIcon />
                  </IncrementButton>
                </AmountContainer>
                <SubtotalText>{product.subtotal}</SubtotalText>
              </SubtotalContainer>
            </ListItem>
          ))}

          <Footer>
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalValue>{total}</TotalValue>
            </TotalContainer>

            <FinishButton>
              <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
            </FinishButton>
          </Footer>
        </ProductList>
      ) : (
        <TotalValue style={{ color: '#fff' }}>
          Seu carrinho está vazio
        </TotalValue>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

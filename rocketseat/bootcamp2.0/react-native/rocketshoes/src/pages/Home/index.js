import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import {
  Container,
  ProductList,
  ListItem,
  ProductImage,
  ProductInfoContainer,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
  ButtonTextContainer,
  ButtonText,
  ItemCartContainer,
  ItemCartAmount,
  ItemCartIcon,
} from './styles';
import * as cartActions from '../../store/modules/cart/actions';
import Header from '../../components/Header';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const products = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    console.tron.log(id);
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <Header />
        <ProductList>
          {products.map(product => (
            <ListItem key={product.id}>
              <ProductImage
                source={{ uri: product.image }}
                alt={product.title}
              />
              <ProductInfoContainer>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>

                <AddToCartButton
                  onPress={() => this.handleAddProduct(product.id)}
                >
                  <ItemCartContainer>
                    <ItemCartIcon size={16} color="#fff" />
                    <ItemCartAmount>{amount[product.id] || 0}</ItemCartAmount>
                  </ItemCartContainer>
                  <ButtonTextContainer>
                    <ButtonText>ADICIONAR</ButtonText>
                  </ButtonTextContainer>
                </AddToCartButton>
              </ProductInfoContainer>
            </ListItem>
          ))}
        </ProductList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

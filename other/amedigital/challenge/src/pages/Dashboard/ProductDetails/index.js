import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Scroll,
  ProductHeaderContainer,
  BackButton,
  ProductImage,
  ProductName,
  ProductPriceContainer,
  OldPrice,
  NewPrice,
  ProductInfoContainer,
  ProductDescription,
  FloatingButton,
} from './styles';
import { formatPrice } from '~/util/format';
import api from '~/services/api';
import fonts from '~/util/fonts';
import Dialog from '~/components/Dialog';

function ProductDetails({ navigation }) {
  const [modalOptions, setModalOptions] = useState({
    visible: false,
  });
  const product = navigation.getParam('product');
  const oldPrice = formatPrice(product.precoDe);
  const newPrice = formatPrice(product.precoPor);

  async function handleClick() {
    const { data } = await api.post(`/produto/${product.id}`);

    if (data.result === 'success') {
      setModalOptions({
        visible: true,
        title: 'Produto reservado com sucesso',
      });
    } else {
      setModalOptions({
        visible: true,
        title: 'Falha ao reservar o produto',
      });
    }
  }

  return (
    <Container>
      <Scroll>
        <ProductHeaderContainer>
          <BackButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#2d3142" />
          </BackButton>
          <ProductImage source={{ uri: product.urlImagem }} />
          <ProductName style={fonts.bold}>{product.nome}</ProductName>
        </ProductHeaderContainer>
        <ProductPriceContainer>
          <OldPrice style={fonts.medium}>{`De: ${oldPrice}`}</OldPrice>
          <NewPrice style={fonts.bold}>{`Por: ${newPrice}`}</NewPrice>
        </ProductPriceContainer>
        <ProductInfoContainer>
          <ProductName style={fonts.bold}>{product.nome}</ProductName>
          <ProductDescription>{product.descricao}</ProductDescription>
        </ProductInfoContainer>
      </Scroll>
      <FloatingButton onPress={handleClick}>
        <Icon name="check" size={36} color="#f2f2f2" />
      </FloatingButton>
      <Dialog
        {...modalOptions}
        onConfirm={() => setModalOptions({ ...modalOptions, visible: false })}
      />
    </Container>
  );
}

ProductDetails.navigationOptions = {
  header: null,
};

export default ProductDetails;

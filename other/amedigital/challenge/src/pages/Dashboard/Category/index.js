import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';

import {
  Container,
  ProductList,
  FullHeightContainer,
  Product,
  ProductImage,
  ProductInfoContainer,
  ProductText,
  PriceContainer,
  OldPrice,
  NewPrice,
  EmptyText,
} from './styles';
import api from '~/services/api';
import { formatPrice } from '~/util/format';
import fonts from '~/util/fonts';

function Category({ navigation }) {
  const category = navigation.getParam('category');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ended, setEnded] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    if (!ended && !loading) {
      setLoading(true);
      const response = await api.get(
        `/produto?categoriaId=${category.id}&offset=${page * 20}&limit=20`
      );

      console.log(response.data.data);
      if (response.data.data.length === 0) {
        setEnded(true);
      }
      setPage(page + 1);
      setProducts(products.concat(response.data.data));
      setLoading(false);
    }
  }

  function renderProducts({ item }) {
    const oldPrice = formatPrice(item.precoDe);
    const newPrice = formatPrice(item.precoPor);

    return (
      <Product
        onPress={() => navigation.navigate('ProductDetails', { product: item })}
      >
        <ProductImage source={{ uri: item.urlImagem }} />
        <ProductInfoContainer>
          <ProductText style={fonts.mediun}>{item.nome}</ProductText>
          <PriceContainer>
            <OldPrice style={fonts.medium}>{oldPrice}</OldPrice>
            <NewPrice style={fonts.bold}>{newPrice}</NewPrice>
          </PriceContainer>
        </ProductInfoContainer>
        <Icon name="chevron-right" color="#5e2a84" size={32} />
      </Product>
    );
  }

  function renderFooter() {
    if (!loading) return null;

    return <ActivityIndicator size="large" style={{ marginVertical: 16 }} />;
  }

  function renderEmpty() {
    return (
      <FullHeightContainer>
        <EmptyText>Nenhum produto encontrado</EmptyText>
      </FullHeightContainer>
    );
  }

  return (
    <Container>
      {loading && products.length === 0 ? (
        <FullHeightContainer>
          <ActivityIndicator size="large" />
        </FullHeightContainer>
      ) : (
        <ProductList
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={renderProducts}
          onEndReached={loadProducts}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
        />
      )}
    </Container>
  );
}

Category.navigationOptions = ({ navigation }) => {
  const category = navigation.getParam('category');
  return {
    header: <Header navigation={navigation} text={category.descricao} back />,
  };
};

export default Category;

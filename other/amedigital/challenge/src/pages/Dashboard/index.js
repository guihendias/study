import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ListContainer,
  CategoriesList,
  ProductList,
  Category,
  CategoryImage,
  CategoryText,
  Product,
  ProductImage,
  ProductText,
  ProductInfoContainer,
  PriceContainer,
  OldPrice,
  NewPrice,
  ListHeader,
  ListName,
  LoadingContainer,
} from './styles';
import Header from '~/components/Header';
import Carousel from '~/components/Carousel';
import api from '~/services/api';
import { formatPrice } from '~/util/format';
import fonts from '~/util/fonts';

function Dashboard({ navigation }) {
  const [banners, setBanners] = useState(null);
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function loadBanners() {
      const response = await api.get('/banner');
      setBanners(response.data.data);
    }

    async function loadCategories() {
      const response = await api.get('/categoria');
      console.log(response.data.data);
      setCategories(response.data.data);
    }

    async function loadMostSelled() {
      const response = await api.get('/produto/maisvendidos');
      setProducts(response.data.data);
    }

    loadCategories();
    loadBanners();
    loadMostSelled();
  }, []);

  function renderCategory({ item }) {
    return (
      <Category
        onPress={() => navigation.navigate('Category', { category: item })}
      >
        <CategoryImage source={{ uri: item.urlImagem }} />
        <CategoryText style={fonts.regular}>{item.descricao}</CategoryText>
      </Category>
    );
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

  return (
    <Container>
      {!products || !categories ? (
        <LoadingContainer>
          <ActivityIndicator size="large" />
        </LoadingContainer>
      ) : (
        <>
          <Carousel data={banners || []} />
          <ListContainer>
            <ListHeader>
              <ListName style={fonts.bold}>Categorias</ListName>
            </ListHeader>
            <CategoriesList
              data={categories}
              keyExtractor={item => String(item.id)}
              renderItem={renderCategory}
            />
          </ListContainer>

          <ListContainer>
            <ListHeader>
              <ListName style={fonts.bold}>Mais vendidos</ListName>
            </ListHeader>
            <ProductList
              data={products}
              keyExtractor={item => String(item.id)}
              renderItem={renderProducts}
            />
          </ListContainer>
        </>
      )}
    </Container>
  );
}

Dashboard.navigationOptions = {
  header: <Header />,
};

export default Dashboard;

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  HeaderRight,
  HeaderLeft,
  MenuList,
  Option,
  MenuImage,
  MenuName,
  Footer,
  StoreName,
} from './styles';

import FirstLogin from './FirstLogin';

function Dashboard({ navigation }) {
  return (
    <Container>
      <MenuList>
        <Option onPress={() => navigation.navigate('Stores')}>
          <MenuImage>
            <Icon name="account-balance" size={60} color="#f2f2f2" />
          </MenuImage>
          <MenuName>Lojas</MenuName>
        </Option>
        <Option onPress={() => navigation.navigate('Members')}>
          <MenuImage>
            <Icon name="people" size={60} color="#f2f2f2" />
          </MenuImage>
          <MenuName>Membros</MenuName>
        </Option>
      </MenuList>
      <MenuList>
        <Option onPress={() => navigation.navigate('Profile')}>
          <MenuImage>
            <Icon name="person" size={60} color="#f2f2f2" />
          </MenuImage>
          <MenuName>Meu perfil</MenuName>
        </Option>
        <Option onPress={() => navigation.navigate('Library')}>
          <MenuImage>
            <Icon name="book" size={60} color="#f2f2f2" />
          </MenuImage>
          <MenuName>Biblioteca</MenuName>
        </Option>
      </MenuList>
      <Footer>
        <StoreName>Lojinha do sérgio</StoreName>
      </Footer>
    </Container>
  );
}

Dashboard.navigationOptions = {
  title: 'Sérgio Henrique Dias',
  headerLeft: <HeaderLeft />,
  headerRight: (
    <HeaderRight
      source={{ uri: 'https://api.adorable.io/avatars/100/abott@adorable.png' }}
    />
  ),
  headerRightContainerStyle: {
    margin: 16,
  },
};

export default Dashboard;

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, StoreList, Store, Name } from './styles';

function Stores({ navigation }) {
  return (
    <Container>
      <StoreList
        data={[
          { id: 1, name: 'Loja teste1' },
          { id: 2, name: 'Loja teste2' },
          { id: 3, name: 'Loja teste3' },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Store
            onPress={() => navigation.navigate('StoreDetails', { store: item })}
          >
            <Name>{item.name}</Name>
            <Icon name="chevron-right" size={30} />
          </Store>
        )}
      />
    </Container>
  );
}

Stores.navigationOptions = {
  title: 'Lojas',
};

export default Stores;

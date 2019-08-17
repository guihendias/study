import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  LibraryList,
  FileContainer,
  File,
  FileImage,
  Name,
} from './styles';

function Library() {
  return (
    <Container>
      <LibraryList
        data={[
          { id: 1, name: 'Item teste1' },
          { id: 2, name: 'Item teste2' },
          { id: 3, name: 'Item teste3' },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <FileContainer onPress={() => {}}>
            <File>
              <FileImage>
                <Icon name="book" size={60} color="#aaa" />
              </FileImage>
              <Name>{item.name}</Name>
            </File>
          </FileContainer>
        )}
      />
    </Container>
  );
}

Library.navigationOptions = {
  title: 'Biblioteca',
};

export default Library;

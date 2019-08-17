import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Member, MemberList, Name } from './styles';

function Members({ navigation }) {
  return (
    <Container>
      <MemberList
        data={[
          { id: 1, name: 'Membro teste1' },
          { id: 2, name: 'Membro teste2' },
          { id: 3, name: 'Membro teste3' },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Member
            onPress={() =>
              navigation.navigate('MemberDetails', { member: item })
            }
          >
            <Name>{item.name}</Name>
            <Icon name="chevron-right" size={30} />
          </Member>
        )}
      />
    </Container>
  );
}

Members.navigationOptions = {
  title: 'Membros',
};

export default Members;

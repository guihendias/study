import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View``;

export const MemberList = styled.FlatList``;

export const Member = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px;
  height: 80px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #ccc;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 18px;
`;

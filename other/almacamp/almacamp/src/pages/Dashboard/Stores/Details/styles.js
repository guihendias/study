import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const InfoContainer = styled.View`
  height: 80px;
  width: 100%;
  padding: 16px 0;
  justify-content: space-around;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #ccc;
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export const Info = styled.Text`
  color: #aaa;
`;

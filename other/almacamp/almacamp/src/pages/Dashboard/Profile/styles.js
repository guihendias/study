import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 16px;
`;

export const Avatar = styled.Image`
  height: 150px;
  width: 150px;
  margin: 16px 0 32px;
  border-radius: 75px;
`;

export const Input = styled.TextInput`
  height: 46px;
  width: 100%;
  margin: 8px 0;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: #aaa;
  border-radius: 4px;
  padding-left: 8px;
`;

export const SubmitButton = styled(RectButton)`
  height: 46px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #b33e3e;
  margin-top: 40px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
`;

import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background: #fff;
`;

export const LogoContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin: 40px 0;
`;

export const Form = styled.View`
  flex: 1.5;
  padding: 16px;
  width: 100%;
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

export const Link = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 8px 0;
`;

export const LinkText = styled.Text`
  text-align: right;
  color: #b33e3e;
  font-weight: 600;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 46px;
  border-radius: 4px;
  background: #000;
  margin-top: 40px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
`;

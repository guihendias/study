import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: 100%;
  background: #fff;
  padding: 16px;
`;

export const Header = styled.View`
  height: 180px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const WelcomeText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Instructions = styled.Text`
  text-align: center;
`;

export const Form = styled.View`
  flex: 1;
  padding-bottom: ${getBottomSpace() + 40}px;
  justify-content: space-around;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ImageText = styled.Text`
  margin: 8px 0;
  font-weight: 600;
  color: #333;
`;

export const ImageInput = styled.View`
  width: 150px;
  height: 150px;
  background: #aaa;
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
  justify-content: center;
  align-items: center;
  height: 46px;
  border-radius: 4px;
  background: #b33e3e;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
`;

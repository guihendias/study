import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import logo from '~/assets/img/logo_sobre.png';
import fonts from '~/util/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin: 16px 16px ${getBottomSpace() + 16}px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  height: 400px;
  justify-content: space-around;
  flex: 1.5;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  height: 160px;
  width: 150px;
`;

export const LogoText = styled.Text`
  font-family: Pacifico-Regular;
  font-size: 64px;
  text-align: center;
  color: #4a4a4a;
  letter-spacing: -1.5px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const DevName = styled.Text`
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.3px;
  margin-bottom: 5px;
`;

export const Date = styled.Text`
  font-size: 12px;
  text-align: center;
  letter-spacing: -0.3px;
`;

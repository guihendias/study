import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import logo from '~/assets/logo_fade.png';

export const Container = styled.View`
  height: 100%;
  background: #fff;

  justify-content: space-around;
`;

export const HeaderLeft = styled.Image.attrs({
  source: logo,
})`
  height: 36px;
  width: 36px;
  background: #fff;
  border-radius: 18px;
  bottom: 2px;
`;

export const HeaderRight = styled.Image`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  background: #fff;
  bottom: 2px;
`;

export const MenuList = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const MenuImage = styled.View`
  height: 120px;
  width: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #333;
  box-shadow: 2px 2px 2px rgba(255, 0, 0, 0.2);
`;

export const MenuName = styled.Text`
  top: 16px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
`;

export const Footer = styled.View`
  height: ${getBottomSpace() + 180}px;
  align-items: center;
  justify-content: center;
`;

export const StoreName = styled.Text`
  font-size: 18px;
  color: #ccc;
  font-weight: 600;
`;

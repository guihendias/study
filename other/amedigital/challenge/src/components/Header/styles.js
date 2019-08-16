import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import logo from '~/assets/img/logo_menu.png';

export const Container = styled.View`
  width: 100%;
  background-color: #5e2a84;
  flex-direction: row;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight(true) : 0}px;
  align-items: center;
  box-shadow: 2px 0px 2px #444;
`;

export const Left = styled.View`
  margin-left: 12px;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  margin: 0 12px;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  height: 36;
  width: 36;
  margin-right: 16px;
`;

export const Name = styled.Text`
  flex: 1;
  color: #fff;
  font-family: Pacifico-Regular;
  padding-bottom: 6px;
  font-size: 24px;
`;

export const HeaderText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: 600;
  padding-bottom: 6px;
  font-size: 24px;
`;

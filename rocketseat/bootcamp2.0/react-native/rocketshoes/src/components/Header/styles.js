import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 35px;
  height: 80px;
  width: 100%;
  background-color: #141419;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  height: 25px;
  width: 200px;
`;

export const CartButton = styled.TouchableOpacity``;

export const CartIcon = styled(Icon).attrs({
  name: 'cart',
  size: 24,
  color: '#fff',
})`
  top: 5px;
`;

export const CartNumberContainer = styled.View`
  position: absolute;
  right: -5px;
  justify-content: center;
  background-color: #7159c1;
  width: 16px;
  height: 16px;
  border-radius: 8px;
`;

export const CartNumber = styled.Text`
  text-align: center;
  font-size: 11px;
  color: #fff;
`;

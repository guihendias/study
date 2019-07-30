import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background-color: #141419;
`;

export const ProductList = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingTop: 16,
    paddingHorizontal: 10,
  },
})``;

export const ListItem = styled.View`
  height: 380px;
  width: 250px;
  padding: 0px 16px;
  margin: 0 10px;
  background-color: #fff;
  border-radius: 8px;
`;

export const ProductImage = styled.Image`
  height: 210px;
  width: 100%;
`;

export const ProductInfoContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const ProductTitle = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const ProductPrice = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: 8px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 40px;
  margin-bottom: 8px;
  background-color: #7159c1;
  border-radius: 6px;
`;

export const ButtonTextContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75%;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const ItemCartContainer = styled.View`
  flex-direction: row;
  width: 25%;
  height: 100%;
  justify-content: space-around;
  padding: 0 8px;
  align-items: center;
  background-color: ${darken(0.05, '#7159c1')};
  border-radius: 6px;
`;

export const ItemCartAmount = styled.Text`
  color: #fff;
`;

export const ItemCartIcon = styled(Icon).attrs({
  name: 'cart',
  size: 24,
  color: '#fff',
})``;

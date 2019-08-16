import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import ImageLoad from 'react-native-image-placeholder';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const FullHeightContainer = styled.View`
  height: ${height - getStatusBarHeight(true) - 60}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Product = styled.TouchableOpacity`
  flex-direction: row;
  height: 90px;
  align-items: center;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #aaa;
  padding: 12px 8px;
`;

export const ProductImage = styled(ImageLoad).attrs({
  resizeMode: 'cover',
})`
  width: 70;
  height: 70;
`;

export const ProductText = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 18px;
  text-align: left;
  color: #2d3142;
  margin-top: auto;
`;

export const ProductInfoContainer = styled.View`
  width: 72%;
  padding: 0 12px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

export const OldPrice = styled.Text`
  font-size: 12px;
  text-decoration: line-through;
  color: #aaaaaa;
`;

export const NewPrice = styled.Text`
  font-size: 20px;
  color: #f15025;
`;

export const EmptyText = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: #aaaaaa;
`;

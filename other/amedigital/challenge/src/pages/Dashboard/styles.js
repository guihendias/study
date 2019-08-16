import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import ImageLoad from 'react-native-image-placeholder';

const { height } = Dimensions.get('window');

export const Container = styled.ScrollView`
  flex: 1;
  background: #fcfcfc;
`;

export const LoadingContainer = styled.View`
  height: ${height - getStatusBarHeight(true) - 60}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ListContainer = styled.View`
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #aaa;
`;

export const CategoriesList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Category = styled.TouchableOpacity`
  height: 110px;
  width: 100px;
  margin: 12px 6px;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryImage = styled(ImageLoad).attrs({
  resizeMode: 'cover',
})`
  width: 70px;
  height: 70px;
`;

export const CategoryText = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  text-align: center;
  color: #2d3142;
  margin-top: auto;
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

export const ListHeader = styled.View`
  height: 40px;
  width: 100%;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #aaa;
  justify-content: center;
`;

export const ListName = styled.Text`
  color: #2d3142;
  font-size: 17px;
  letter-spacing: -0.4px;
  margin-left: 16px;
`;

import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';
import ImageLoad from 'react-native-image-placeholder';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fcfcfc;
`;

export const Scroll = styled.ScrollView``;

export const ProductHeaderContainer = styled.View`
  width: 100%;
  height: 250px;
  justify-content: space-between;
  padding: 20px 16px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #aaa;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  left: 16px;
`;

export const ProductImage = styled(ImageLoad)`
  width: 150px;
  height: 150px;
  margin-top: 16px;
  align-self: center;
`;

export const ProductName = styled.Text`
  font-size: 17px;
  letter-spacing: -0.4px;
  color: #2d3142;
  text-align: left;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #aaa;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
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

export const ProductInfoContainer = styled.View`
  padding: 20px 16px 76px;
`;

export const ProductDescription = styled.Text`
  margin-top: 24px;
  text-align: justify;
`;

export const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: ${getBottomSpace() + 16}px;
  right: 16px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background: #5e2a84;
  box-shadow: 2px 0px 2px #444;
  elevation: 2;
`;

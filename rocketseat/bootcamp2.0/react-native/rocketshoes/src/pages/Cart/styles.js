import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  height: 100%;
  background-color: #141419;
`;

export const ProductList = styled.View`
  background-color: #fff;
  border-radius: 6px;
  margin-top: 16px;
  padding: 16px 8px 8px;
  width: 88%;
`;

export const ListItem = styled.View`
  margin: 16px;
`;

export const ProductInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 60%;
`;

export const ProductImage = styled.Image`
  height: 75px;
  width: 90px;
`;

export const ProductDescriptionContainer = styled.View`
  height: 100px;
  width: 150px;
  justify-content: space-around;
  margin: 0 8px;
`;

export const ProductTitle = styled.Text`
  font-size: 12px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const TrashIcon = styled(Icon).attrs({
  name: 'delete',
  size: 24,
  color: '#7159c1',
})``;

export const SubtotalContainer = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  background-color: #eee;
  padding: 0 8px;
  margin: 16px 0;
  border-radius: 6px;
  justify-content: space-between;
  align-items: center;
`;

export const SubtotalText = styled.Text`
  font-weight: bold;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 100%;
`;

export const AmountInput = styled.TextInput`
  width: 50px;
  height: 70%;
  background-color: #fff;
  padding-left: 8px;
  border-radius: 6px;
  border: 0.5px solid #ccc;
`;

export const DecrementButton = styled.TouchableOpacity``;

export const DecrementIcon = styled(Icon).attrs({
  name: 'minus-circle-outline',
  size: 20,
  color: '#7159c1',
})`
  top: 2px;
`;

export const IncrementButton = styled.TouchableOpacity``;

export const IncrementIcon = styled(Icon).attrs({
  name: 'plus-circle-outline',
  size: 20,
  color: '#7159c1',
})`
  top: 2px;
`;

export const Footer = styled.View`
  height: 140px;
  align-items: center;
  justify-content: space-between;
`;

export const FinishButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #7159c1;
  border-radius: 6px;
`;

export const FinishButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const TotalContainer = styled.View`
  height: 70px;
  justify-content: space-around;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-size: 18px;
  color: #aaa;
  font-weight: bold;
`;

export const TotalValue = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

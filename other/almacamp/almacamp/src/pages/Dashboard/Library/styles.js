import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
`;

export const LibraryList = styled.FlatList.attrs({
  numColumns: 2,
})``;

export const FileContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 8px;
`;

export const File = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
`;

export const FileImage = styled.View``;

export const Name = styled.Text`
  top: 16px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
`;

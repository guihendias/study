import React from 'react';
import RNDialog from 'react-native-dialog';
import { View } from 'react-native';

export default function Dialog({ title, description, visible, onConfirm }) {
  return (
    <View>
      <RNDialog.Container visible={visible}>
        <RNDialog.Title style={{ color: '#aaa', fontSize: 15 }}>
          {title}
        </RNDialog.Title>
        {description && (
          <RNDialog.Description style={{ color: '#aaa' }}>
            {description}
          </RNDialog.Description>
        )}
        <RNDialog.Button onPress={onConfirm} color="#5e2a84" label="OK" />
      </RNDialog.Container>
    </View>
  );
}

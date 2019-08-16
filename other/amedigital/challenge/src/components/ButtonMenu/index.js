import React from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const ButtonMenu = ({ navigation, color }) => (
  <TouchableOpacity style={styles.buttonMenu} onPress={navigation.openDrawer}>
    <Icon name="bars" color={color || '#fff'} size={20} />
  </TouchableOpacity>
);

export default withNavigation(ButtonMenu);

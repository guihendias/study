import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const OrganizatinoItem = ({ organization }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: organization.avatar_url }} />
    <Text style={styles.title}>{organization.login}</Text>
  </View>
);

OrganizatinoItem.propTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default OrganizatinoItem;

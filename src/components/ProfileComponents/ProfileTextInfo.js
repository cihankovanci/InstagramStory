import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from './Avatar';

const ProfileTextInfo = props => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.number}>{props.number}</Text>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

export default ProfileTextInfo;

const styles = StyleSheet.create({
  number: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  name: {
    fontSize: 13,
    fontWeight: '400',
    color: '#212121',
  },
});

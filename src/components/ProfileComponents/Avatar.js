import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Avatar = props => {
  return (
    <TouchableOpacity
      style={{padding: 6, paddingLeft: 30}}
      onPress={props.onClick}>
      {props.isActive ? (
        <Image
          source={require('../../../assets/avatarActive.png')}
          style={{width: 98, height: 98}}
        />
      ) : (
        <Image
          source={require('../../../assets/avatarPassive.png')}
          style={{width: 98, height: 98}}
        />
      )}
    </TouchableOpacity>
  );
};

export default Avatar;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const StoryTop = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Image
          source={require('../../assets/avatar.png')}
          style={{width: 32, height: 32, padding: 5}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              paddingLeft: 10,
              fontSize: 14,
              fontWeight: '500',
              color: '#FFFFFF',
            }}>
            Revy
          </Text>
          <Text
            style={{
              paddingLeft: 10,
              fontSize: 14,
              fontWeight: '500',
              color: '#FFFFFF75',
            }}>
            3h
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/threeDots.png')}
          style={{
            width: 18,
            height: 18,
            padding: 5,
            resizeMode: 'contain',
            marginRight: 10,
          }}
        />
        <TouchableOpacity onPress={props.onClose}>
          <Image
            source={require('../../assets/Close.png')}
            style={{width: 18, height: 18, padding: 5, marginRight: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StoryTop;

const styles = StyleSheet.create({});

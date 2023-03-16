import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';

const StoryBottom = () => {
  const [text, onChangeText] = React.useState('Yorum Yap');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Image
          source={require('../../assets/Liked.png')}
          style={{
            width: 20,
            height: 20,
            padding: 10,
            marginRight: 20,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('../../assets/Sent.png')}
          style={{width: 20, height: 20, padding: 10, marginRight: 10}}
        />
      </View>
    </View>
  );
};

export default StoryBottom;

const styles = StyleSheet.create({
  input: {
    width: 280,
    height: 44,
    borderRadius: 44,

    borderWidth: 1,
    padding: 10,
    color: 'white',
    borderColor: 'white',
    marginRight: 0,
  },
});

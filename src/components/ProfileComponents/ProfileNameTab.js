import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ProfileTextInfo from './ProfileTextInfo';
import Avatar from './Avatar';

const ProfileNameTab = props => {
  return (
    <View style={{flex: 1, flexDirection: 'column', marginTop: 20}}>
      <View style={styles.container}>
        <Image
          style={styles.LeftButtonimage}
          source={require('../../../assets/LeftBackButton.png')}
        />
        <View style={styles.nameContainer}>
          <View>
            <Text style={styles.textStyle}>Revy</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.Bedgeimage}
              source={require('../../../assets/bedge.png')}
            />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Avatar isActive={props.isActive} onClick={props.onClick} />
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <ProfileTextInfo name="Takipçi" number="6956" />
          <ProfileTextInfo name="Takip Ediyor" number="27.7m" />
        </View>
      </View>
    </View>
  );
};

export default ProfileNameTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',

    height: '4%',
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },

  LeftButtonimage: {
    width: 10,
    height: 16,
    marginLeft: 8,
    resizeMode: 'contain',
    marginTop: 5,
    right: '600%',
    marginLeft: 20,
  },

  Bedgeimage: {
    width: 13,
    height: 13,
    marginLeft: 4,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

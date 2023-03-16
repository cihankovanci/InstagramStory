import * as React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/screens/profile';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {createStore} from 'redux';

const initialState = {
  counter: 0,
};

function reducers(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};

    case 'DOWN_COUNTER':
      return {...state, counter: state.counter - 1};

    case 'Finish_COUNTER':
      return {...state, counter: state.counter + 100};

    case '0':
      return {...state, counter: 0};
    case '1':
      return {...state, counter: 1};
    case '2':
      return {...state, counter: 2};
    case '3':
      return {...state, counter: 3};
    default:
      return state;
  }
}

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search!</Text>
    </View>
  );
}

function ReelsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Reels!</Text>
    </View>
  );
}

function LikedScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Liked!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{headerShown: false, tabBarShowLabel: false}}
          initialRouteName="Profile">
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/home.png')}
                  style={{width: 22.5, height: 22.5}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/search.png')}
                  style={{width: 22.5, height: 22.5}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Reels"
            component={ReelsScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/video.png')}
                  style={{width: 22.5, height: 22.5}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Liked"
            component={LikedScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/heart.png')}
                  style={{width: 22.5, height: 22.5}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/profile.png')}
                  style={{width: 22.5, height: 22.5}}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

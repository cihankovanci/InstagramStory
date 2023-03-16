import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

const initialState = {
  counter: 0,
};

function reducers(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};

    default:
      return state;
  }
}

const StoryTab = props => {
  const counter = useSelector(selector => selector.counter);

  const [count, setCount] = useState(0);
  return (
    <Provider store={createStore(reducers, initialState)}>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'flex-start',

          flexDirection: 'row',
          marginTop: 15,
        }}>
        <View
          style={{
            width: '24%',
            backgroundColor: props.count >= 0 ? '#FFCC00' : 'white',
            height: 3,
            borderRadius: 2,
          }}>
          <Text>0</Text>
        </View>
        <View
          style={{
            width: '24%',
            backgroundColor: props.count >= 1 ? '#FFCC00' : 'white',
            height: 3,
            borderRadius: 2,
          }}>
          <Text>1</Text>
        </View>
        <View
          style={{
            width: '24%',
            backgroundColor: props.count >= 2 ? '#FFCC00' : 'white',
            height: 3,
            borderRadius: 2,
          }}>
          <Text>2</Text>
        </View>
        <View
          style={{
            width: '24%',
            backgroundColor: props.count >= 3 ? '#FFCC00' : 'white',
            height: 3,
            borderRadius: 2,
          }}>
          <Text>3</Text>
        </View>
      </View>
    </Provider>
  );
};

export default StoryTab;

const styles = StyleSheet.create({});

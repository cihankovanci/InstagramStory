import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import Stories from './stories';

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

const First = () => {
  const counter = useSelector(selector => selector.counter);

  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch({type: 'UPDATE_COUNTER'});
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={{fontSize: 24}}>First: {counter}</Text>
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const Second = () => {
  const counter = useSelector(selector => selector.counter);

  const [count, setCount] = useState(0);
  return (
    <View style={{flex: 1, backgroundColor: '#eceff1'}}>
      <Text style={{fontSize: 24}}>Second: {counter}</Text>
      <Text>count: {count} </Text>
      <Button title="update" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default function ProfileScreen() {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <View
        style={{
          flex: 1,
        }}>
        {/*  <First />
        <Second /> */}
        <Stories />
      </View>
    </Provider>
  );
}

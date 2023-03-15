import React, {useState} from 'react';
import {View, Text, Button, Modal, StyleSheet, Pressable} from 'react-native';
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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Provider store={createStore(reducers, initialState)}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Stories />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

import React, {useRef, createRef, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
  Pressable,
  Button,
} from 'react-native';

import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {addIndex, map} from 'ramda';
import story1 from '../../assets/stories/story1.png';
import story2 from '../../assets/stories/story2.png';
import story3 from '../../assets/stories/story3.png';
import story4 from '../../assets/stories/story4.png';
import StoryTab from '../components/StoryTab';
import StoryTop from '../components/StoryTop';
import StoryBottom from '../components/StoryBottom';

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

const images = new Array(4).fill(
  'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
);

const imagesData = [story1, story2, story3, story4];

const Stories = props => {
  const [cou, setCou] = useState();
  const counter = useSelector(selector => selector.counter);

  const dispatch = useDispatch();
  const handleUpdate = () => {
    if (storyTab == 0) {
      dispatch({type: '0'});
      console.log('0000000');
    } else if (storyTab == 1) {
      dispatch({type: '1'});
      console.log('111111');
    } else if (storyTab == 2) {
      dispatch({type: '2'});
      console.log('222222');
    } else if (storyTab == 3) {
      dispatch({type: '3'});
      console.log('333333');
    }
  };

  useEffect(() => {
    // if (storyTab > 2) {
    //   dispatch({type: 'Finish_COUNTER'});
    //   console.log('finish');
    // }
    // if (memory < storyTab) {
    //   console.log('UpdateCounter');
    //   dispatch({type: 'UPDATE_COUNTER'});
    // } else {
    //   console.log('downCounter');
    //   dispatch({type: 'DOWN_COUNTER'});
    // }
  }, []);

  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();
  const [storyTab, setStoryTab] = useState(0);
  const [memory, setMemory] = useState();

  const scrollViewRef = useRef(null);
  const handleChange = () => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],

      {useNativeDriver: true},
    );
    setCou(counter);
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <Provider store={createStore(reducers, initialState)}>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            alignItems: 'flex-start',
            top: 0,
            width: '96%',
          }}>
          <StoryTab count={counter} />
          <StoryTop onClose={props.onClose} />
        </View>
        <View style={styles.scrollContainer}>
          {/* <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [10, 70, 10],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, {width}]}
                />
              );
            })}
          </View> */}
          {/* <Text>{storyTab}</Text>
          <Text>redux{counter}</Text> */}
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleChange}
            scrollEventThrottle={1}
            ref={scrollViewRef}
            onMomentumScrollEnd={event => {
              // scroll animation ended
              console.log(event.nativeEvent.contentOffset.x);
              setStoryTab((event.nativeEvent.contentOffset.x / 392).toFixed(0));
              console.log('storyTab', storyTab);
              setMemory(storyTab);
              console.log('setMemo', memory);
              console.log('counter', counter);
              handleUpdate();
            }}>
            {imagesData.map((image, imageIndex) => {
              return (
                <View
                  style={{
                    width: windowWidth,
                    height: '100%',
                  }}
                  key={imageIndex}>
                  <ImageBackground
                    source={image}
                    style={styles.card}></ImageBackground>
                </View>
              );
            })}
          </ScrollView>
          <StoryBottom />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    width: '100%',
  },
  scrollContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    flex: 1,
    marginBottom: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Stories;

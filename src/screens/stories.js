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

import story1 from '../../assets/stories/story1.png';
import story2 from '../../assets/stories/story2.png';
import story3 from '../../assets/stories/story3.png';
import story4 from '../../assets/stories/story4.png';
import StoryTab from '../components/StoryTab';

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
const Stories = () => {
  const counter = useSelector(selector => selector.counter);

  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch({type: 'UPDATE_COUNTER'});
  };

  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();
  const [storyTab, setStoryTab] = useState(0);
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

      {useNativeDriver: false},
    );
  };

  return (
    <Provider store={createStore(reducers, initialState)}>
      <SafeAreaView style={styles.container}>
        <StoryTab count={storyTab} />
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
          <Text>{storyTab}</Text>
          <Text>redux{counter}</Text>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleChange}
            scrollEventThrottle={1}
            onMomentumScrollEnd={event => {
              // scroll animation ended
              console.log(event.nativeEvent.contentOffset.x);
              setStoryTab((event.nativeEvent.contentOffset.x / 392).toFixed(0));
              handleUpdate();
            }}>
            {imagesData.map((image, imageIndex) => {
              return (
                <View
                  style={{width: windowWidth, height: '100%'}}
                  key={imageIndex}>
                  <ImageBackground
                    source={image}
                    style={styles.card}></ImageBackground>
                </View>
              );
            })}
          </ScrollView>
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
  },
  scrollContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
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

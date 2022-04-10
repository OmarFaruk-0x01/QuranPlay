import ViewPager from '@react-native-community/viewpager';
import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StatusBarIOS,
  StatusBar,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import {OnScreenPost} from '../../components/Posts';
import {DemoPosts} from '../../Constants/DemoData';

const HomeScreen: React.FC = () => {
  const [onScreenIndex, setOnScreenIndex] = useState(0);
  const [onScreenState, setScreenState] = useState('');
  const onPageScroll = useCallback(({nativeEvent}) => {}, []);
  const onPageScrollStateChange = ({nativeEvent}) => {
    setScreenState(nativeEvent.pageScrollState);
  };
  // console.log(onScreenIndex, onScreenState);

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />

      <ViewPager
        initialPage={0}
        onPageSelected={({nativeEvent}) => {
          console.log('Selected', nativeEvent.position);
          setOnScreenIndex(nativeEvent.position);
        }}
        onPageScrollStateChanged={onPageScrollStateChange}
        orientation="vertical"
        style={{flex: 1}}>
        {DemoPosts.map((item, index) => (
          <OnScreenPost
            key={`${index + 1}`}
            caption={item.caption}
            meta={item.meta}
            tags={item.tags}
            user={item.user}
            video={item.video}
            isPaused={onScreenIndex == index}
          />
        ))}
      </ViewPager>
      {/* <FlatList
        style={{}}
        data={DemoPosts}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <OnScreenPost
              caption={item.caption}
              meta={item.meta}
              tags={item.tags}
              user={item.user}
              video={item.video}
            />
          );
        }}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={10}
        scrollEventThrottle={6}
        onScroll={() => {
          // console.log('Scroll');
        }}
        onScrollAnimationEnd={() => {
          console.log('End');
        }}
      /> */}
    </View>
  );
};
export default HomeScreen;

import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import Video from 'react-native-video';
import {OnScreenPostStyle} from './PostsStyles';
import {OnScreenPostProps} from '../../interfaces/PropTypes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeColors} from '../../Constants';
import LinearGradient from 'react-native-linear-gradient';

const OnScreenPost: React.FC<OnScreenPostProps> = ({
  tags,
  caption,
  video,
  user,
  meta,
  isPaused,
}) => {
  const [isShowFullDetails, setIsShowFullDetails] = useState(
    caption.length < 130 && tags.length <= 5 ? true : false,
  );
  const [paused, setPaused] = useState(false);
  const finalCaption = isShowFullDetails
    ? caption
    : caption.length > 100
    ? caption.substring(0, 120) + '...'
    : caption;
  const seekBarWidth = useRef(new Animated.Value(0)).current;
  useEffect(
    () => () => {
      setPaused(true);
    },
    [],
  );

  return (
    <View style={OnScreenPostStyle.VideoContainer}>
      <Video
        style={OnScreenPostStyle.video}
        resizeMode={'contain'}
        onError={e => {
          // console.log(JSON.stringify(e, undefined, 2));
        }}
        source={{
          uri: video.url,
          type: 'mp4',
        }}
        onLoadStart={() => {
          // console.log('Load Start');
        }}
        onBuffer={data => {
          // console.log('Buffer Data: ', data);
        }}
        onLoad={e => {
          // console.log(e);
        }}
        onVideoEnd={() => {
          setPaused(true);
        }}
        onProgress={({currentTime, seekableDuration}) => {
          seekBarWidth.setValue(
            parseInt(((currentTime * 100) / seekableDuration).toFixed(), 10),
          );
        }}
        repeat={false}
        rate={1.0}
        volume={1.0}
        muted={false}
        paused={paused}
        playInBackground={false}
        playWhenInactive={false}
      />
      <View style={OnScreenPostStyle.ActionSideBarContainer}>
        <TouchableOpacity
          style={[
            OnScreenPostStyle.PostAuthorProfileContainer,
            OnScreenPostStyle.ActionContainer,
          ]}>
          <Image
            source={{uri: user.avatarURL}}
            style={OnScreenPostStyle.PostAuthorProfile}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: ThemeColors.secondryColor,
              padding: 3,
              borderRadius: 40,
              position: 'absolute',
              bottom: -9,
            }}>
            <AntDesign name={'plus'} size={8} color={'#fff'} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            OnScreenPostStyle.LoveReactContainer,
            OnScreenPostStyle.ActionContainer,
          ]}>
          <AntDesign
            name="heart"
            style={{opacity: 0.9}}
            size={25}
            color={'#fff'}
          />
          <Text style={OnScreenPostStyle.ActionText}>{meta.loved}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            OnScreenPostStyle.LoveReactContainer,
            OnScreenPostStyle.ActionContainer,
          ]}>
          <MaterialCommunityIcon
            style={{opacity: 0.9}}
            name="message-text"
            size={25}
            color={'#fff'}
          />
          <Text style={OnScreenPostStyle.ActionText}>120.3K</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            OnScreenPostStyle.LoveReactContainer,
            OnScreenPostStyle.ActionContainer,
          ]}>
          <IonIcons name="share-outline" size={25} color={'#fff'} />
          <Text style={OnScreenPostStyle.ActionText}>{meta.shared}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            OnScreenPostStyle.LoveReactContainer,
            OnScreenPostStyle.ActionContainer,
          ]}>
          <IonIcons name="download-outline" size={25} color={'#fff'} />
          <Text style={OnScreenPostStyle.ActionText}>{meta.downloaded}</Text>
        </TouchableOpacity>
      </View>
      <View style={OnScreenPostStyle.VideoInfoContianer}>
        <View style={[OnScreenPostStyle.VideoInfo]}>
          <Text style={OnScreenPostStyle.username}>@{user.username}</Text>
          <View style={OnScreenPostStyle.mentionContainer}>
            <Text style={OnScreenPostStyle.mention}>Mesery Al Afsay</Text>
          </View>
          <Text style={OnScreenPostStyle.caption}>{finalCaption}</Text>
          {isShowFullDetails ? (
            <View style={OnScreenPostStyle.tagsContainer}>
              {tags.map(({tag, tagID}) => (
                <Text key={tag} style={OnScreenPostStyle.tag}>
                  {tag}
                </Text>
              ))}
            </View>
          ) : null}

          {caption.length > 130 ||
          tags.length > 5 ||
          (caption.length < 130 && tags.length > 5) ? (
            <TouchableOpacity
              onPress={() => {
                setIsShowFullDetails(!isShowFullDetails);
              }}
              style={OnScreenPostStyle.show_collaps}>
              <Text style={OnScreenPostStyle.show_collaps_text}>
                {!isShowFullDetails ? 'See More' : 'Hide'}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {!paused && (
        <View
          style={{
            ...OnScreenPostStyle.PlayButton,
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            transform: [],
            zIndex: 0,
          }}>
          <TouchableOpacity
            onPress={() => setPaused(!paused)}
            style={{flex: 1}}></TouchableOpacity>
        </View>
      )}

      {paused && (
        <View style={OnScreenPostStyle.PlayButton}>
          <TouchableOpacity onPress={() => setPaused(!paused)}>
            <IonIcons name={'play'} size={140} color={'#ebebeb7d'} />
          </TouchableOpacity>
        </View>
      )}

      <LinearGradient
        style={{
          zIndex: 0,
          position: 'absolute',
          bottom: 0,
          height: isShowFullDetails ? 350 : 200,
          width: '100%',
        }}
        colors={['rgba(0,0,0,0)', '#00000088']}>
        <View />
      </LinearGradient>
      <Animated.View
        style={{
          width: seekBarWidth.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
            easing: Easing.linear,
            extrapolate: 'extend',
          }),
          backgroundColor: '#fff',
          position: 'absolute',
          height: 1,
          bottom: 0,
        }}
      />
    </View>
  );
};

export default OnScreenPost;

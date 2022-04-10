import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {LocalVideoCardStyle} from './CardsStyles';

const LocalVideoCard: React.FC<{
  videoURI: string;
  thumbUri: string;
  duration: string;
}> = ({videoURI, thumbUri, duration}) => {
  const navigation = useNavigation();
  function navigateToPreview() {
    navigation.navigate('Post_PreviewScreen', {videoURI, duration});
  }
  return (
    <View style={LocalVideoCardStyle.localVideoContainer}>
      <TouchableOpacity
        style={LocalVideoCardStyle.localVideo}
        onPress={navigateToPreview}>
        <Image
          source={{uri: thumbUri}}
          width={130}
          height={200}
          resizeMode="cover"
          style={LocalVideoCardStyle.localVideo}
        />
        <Text style={LocalVideoCardStyle.durationText}>{duration}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(LocalVideoCard);

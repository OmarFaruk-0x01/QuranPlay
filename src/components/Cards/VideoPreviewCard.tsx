import React, { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';
import { VideoPreviewCardStyle } from './CardsStyles';

import Video from 'react-native-video';
import AntDesign from 'react-native-vector-icons/AntDesign';
const VideoPreviewCard: React.FC<{ uri: string }> = ({ uri }) => {
    const [videoDuration, setVideoDuration] = useState('')
    return (
        <View style={VideoPreviewCardStyle.localVideoContainer}>
            <Video
                paused={true}
                style={VideoPreviewCardStyle.localVideo}
                source={{ uri }}
                resizeMode={'contain'}
                onLoad={(data) => {
                    var date = new Date(0);
                    date.setSeconds(data.duration); // specify value for SECONDS here
                    var timeString = date.toISOString().substr(11, 8);
                    setVideoDuration(timeString);
                }
                }
            />

            <Text style={VideoPreviewCardStyle.durationText}>{videoDuration}</Text>
            <AntDesign name={'play'} size={50} color={'#000'} />
        </View>
    )
}


export default React.memo(VideoPreviewCard);
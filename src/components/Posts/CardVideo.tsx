import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';
// import Video from 'react-native-video';
import { CardPostStyle } from './PostsStyles';
// import { VideoPlayer, Trimmer } from 'react-native-video-processing';
// import Video, { VideoProperties } from 'react-native-video';
// const Video = lazy(() => import('react-native-video'));

const CardVideo = () => {
    const [paused, setPaused] = useState(false);
    const videoPlayerRef = useRef()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!mounted) {
            setMounted(true)
        }
        return () => {
            setMounted(false)
        }
    }, [])



    return (<View style={CardPostStyle.CardVideoContainer}>
        <Image style={CardPostStyle.CardVideo} source={{ uri: "https://media1.giphy.com/media/xT8qB6LfZjyq2ck7iE/giphy.gif" }} />
    </View >)
}

export default CardVideo;
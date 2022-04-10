import React from 'react';
import { View, StyleSheet, useWindowDimensions, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ThemeColors } from '../../Constants';

const { width, height } = Dimensions.get('screen');
const ContainerWidth = (width * 80) / 100;
const barWidth = (ContainerWidth * 70) / 100;
const VideoPlayerGFX = () => {
    return (
        <View style={styles.VideoPlayerContainer}>
            <View
                style={[styles.circle, { position: 'absolute', bottom: 5, left: 3 }]}
            />
            <View
                style={[styles.circle, { position: 'absolute', bottom: 35, right: 3 }]}
            />
            <View
                style={[styles.circle, { position: 'absolute', bottom: 70, right: 3 }]}
            />
            <View
                style={[styles.rect, { position: 'absolute', bottom: 15, left: 30 + 8 }]}
            />
            <View
                style={[
                    styles.circle,
                    {
                        width: 100,
                        height: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: ThemeColors.secondryColorWithOffset(.2)
                        , opacity: .6
                    },
                ]}>
                <View
                    style={[
                        styles.circle,
                        styles.putcenter,
                        {
                            width: 80,
                            height: 80,
                            backgroundColor: ThemeColors.secondryColorWithOffset(.4)
                        },
                    ]}>
                    <View
                        style={[
                            styles.circle,
                            styles.putcenter,
                            {
                                width: 60,
                                height: 60,
                                backgroundColor: ThemeColors.secondryColorWithOffset(.6)
                            },
                        ]}>
                        <View
                            style={[
                                styles.circle,
                                styles.putcenter,
                                {
                                    width: 40,
                                    height: 40,
                                    backgroundColor: ThemeColors.secondryColorWithOffset(.8)
                                },
                            ]}
                        ><AntDesign name={'play'} size={20} color={'#Fff'} /></View>

                    </View>
                </View>
            </View>
        </View>
    );
};

export default VideoPlayerGFX;

const styles = StyleSheet.create({
    VideoPlayerContainer: {
        width: ContainerWidth,
        height: 180,
        borderWidth: 2,
        borderColor: ThemeColors.secondryColor,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: ThemeColors.secondryColor,
        opacity: 0.2,
    },
    rect: {
        width: barWidth,
        height: 7,
        borderRadius: 7,
        backgroundColor: ThemeColors.secondryColor,
        opacity: 0.2,
    },
    putcenter: {
        alignItems: 'center',
        justifyContent: 'center'
        , opacity: 1
    },
});

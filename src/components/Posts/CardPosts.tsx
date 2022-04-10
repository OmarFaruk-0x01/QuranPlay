import React, { ClassAttributes, LegacyRef, useRef, useState } from 'react';
import { View, Text, TouchableOpacityBase, TouchableOpacity, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import Video, { VideoProperties } from 'react-native-video';
import { CardPostStyle, OnScreenPostStyle } from './PostsStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons'
import { ThemeColors } from '../../Constants';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CardVideo from './CardVideo';


const CardPost: React.FC = () => {
    return (
        <View style={CardPostStyle.TagedSectionContainer}>
            <View style={CardPostStyle.TagedSectionHeader}>
                <View style={CardPostStyle.TagedIcon}>
                    <Fontisto name={"hashtag"} size={14} color={"#000"} />
                </View>
                <View style={CardPostStyle.TagedSectionHeaderTitleContainer}>
                    <Text style={CardPostStyle.TagedSectionHeaderTitle}>Surah_Mulk</Text>
                    <Text style={CardPostStyle.TagedSectionHeaderSubTitle}>Trending hashtag</Text>
                </View>
                <Text style={CardPostStyle.TagedSectionHeaderPostCount}>30.0M+</Text>
            </View>
            <View style={CardPostStyle.TagedSectionContent} >
                <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8]} contentContainerStyle={{ marginLeft: 30, }} keyExtractor={(i) => (i.toString())} renderItem={({ item }) => (
                    <CardVideo />
                )} horizontal showsHorizontalScrollIndicator={false} />
            </View>
        </View>
    )
}

export default CardPost
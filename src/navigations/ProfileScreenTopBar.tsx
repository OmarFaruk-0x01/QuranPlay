import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';
import { ThemeColors } from '../Constants/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { GridViewVideos } from '../components/VideoLists/';

const TopTabBar = createMaterialTopTabNavigator()

const Test = () => <View>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40].map(i => <Text key={i.toString()}>Comp:- {i}</Text>)}</View>
const ProfileScreenTopBar = () => {
    return (
        <TopTabBar.Navigator tabBarOptions={{ activeTintColor: ThemeColors.secondryColor, showIcon: true, showLabel: false, indicatorStyle: { backgroundColor: ThemeColors.secondryColor } }}>
            <TopTabBar.Screen options={{ tabBarIcon: ({ color }) => <IonIcons name={"apps-outline"} size={20} color={color} /> }} component={GridViewVideos} name={"AllVideos"} />
            <TopTabBar.Screen options={{ tabBarIcon: ({ color }) => <AntDesign name={"heart"} size={20} color={color} /> }} component={Test} name={"AllLikes"} />
        </TopTabBar.Navigator>
    )
}

export default ProfileScreenTopBar;
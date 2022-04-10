
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MyProfileHeaderStyle } from './HeaderStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { ThemeColors } from '../../Constants/';
const MyProfile: React.FC = ({ nav }) => {
    return (
        <View style={MyProfileHeaderStyle.container}>
            <TouchableOpacity onPress={() => { nav.goBack() }} style={MyProfileHeaderStyle.headerIcon}>
                <AntDesign name={"back"} size={20} color={ThemeColors.gray} />
            </TouchableOpacity>
            <Text style={MyProfileHeaderStyle.profileTitle}>Omar</Text>
            <TouchableOpacity style={MyProfileHeaderStyle.headerIcon}>
                <Entypo name={"dots-three-vertical"} size={15} color={ThemeColors.gray} />
            </TouchableOpacity>
        </View>
    )
}

export default MyProfile;

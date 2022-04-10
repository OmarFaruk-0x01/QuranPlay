import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ProfileCardStyle } from './CardsStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ThemeColors } from '../../Constants/index';


const ProfileCard: React.FC = () => {
    return (
        <View style={ProfileCardStyle.Container}>
            <View style={ProfileCardStyle.ProfilePhotoContainer}>
                {/* <Image style={ProfileCardStyle.ProfilePhoto} source={""} /> */}

                <View>
                    <View style={ProfileCardStyle.ProfilePhoto} />
                    <TouchableOpacity style={ProfileCardStyle.ProfilePhotoUploadIcon}>
                        <AntDesign name={'camera'} color={ThemeColors.whiterGray} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={ProfileCardStyle.ProfileInfoContainer}>
                <View style={ProfileCardStyle.ProfileFollowContainer}>
                    <View style={ProfileCardStyle.ProfileFollowFollowing}>
                        <View style={ProfileCardStyle.ProfileFollow}>
                            <Text style={ProfileCardStyle.ProfileNText}>0</Text>
                            <Text style={ProfileCardStyle.ProfileFText}>Followers</Text>
                        </View>
                        <View style={ProfileCardStyle.ProfileFollow}>
                            <Text style={ProfileCardStyle.ProfileNText}>0</Text>
                            <Text style={ProfileCardStyle.ProfileFText}>Followings</Text>
                        </View>
                    </View>
                    <View style={ProfileCardStyle.ProfileActionContainer}>
                        <TouchableOpacity style={ProfileCardStyle.ProfileActionButton}>
                            <Text style={ProfileCardStyle.ProfileActionText}>Edit Profile</Text>
                            <AntDesign name={'edit'} size={15} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[ProfileCardStyle.ProfileActionButton, { backgroundColor: ThemeColors.secondryColor }]}>
                            <Text style={[ProfileCardStyle.ProfileActionText, { color: "#fff" }]}>Follow</Text>
                            <AntDesign name={'hearto'} size={15} color={"#fff"} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={ProfileCardStyle.ProfileBioContainer}>
                    <Text style={ProfileCardStyle.ProfileBioText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, animi?</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileCard;

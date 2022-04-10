import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileCard } from '../../components/Cards';
import { MyProfileHeader } from '../../components/Headers';
import { ProfileScreenTopBar } from '../../navigations/';

const ProfileScreen: React.FC = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <MyProfileHeader nav={navigation} />
            <ProfileCard />
            <ProfileScreenTopBar />
        </SafeAreaView>
    )
}

export default ProfileScreen;
import React from "react";
import { View, Text } from 'react-native';
import { UploadScreenHeaderStyle } from './HeaderStyle';

const UploadScreenHeader = () => {
    return (
        <View style={UploadScreenHeaderStyle.headerContainer}>
            <View style={UploadScreenHeaderStyle.headerDash} />
        </View>
    )
}

export default UploadScreenHeader;
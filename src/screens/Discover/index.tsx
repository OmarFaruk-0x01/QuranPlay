import React from 'react';
import { View } from 'react-native';
import { DiscoverScreenStyle } from './styles';

import { SearchHeader } from '../../components/Headers';
import { CardPost } from '../../components/Posts';


const DiscoverScreen: React.FC = () => {
    return (
        <View style={DiscoverScreenStyle.DiscoverScreenContainer}>
            <SearchHeader />
            <CardPost />

        </View>
    )
}

export default DiscoverScreen;
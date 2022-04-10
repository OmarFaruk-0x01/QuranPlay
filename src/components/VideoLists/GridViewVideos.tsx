import React from 'react';
import { View, FlatList } from "react-native"
import CardVideo from "../Posts/CardVideo";
import { GridViewVideosStyle } from './VideoListStyle';

const GridViewVideos: React.FC = () => {
    return (<View style={GridViewVideosStyle.container}>
        <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 14, 15, 16]}
            renderItem={({ item }) => (
                <CardVideo />
            )}
            numColumns={3}

            horizontal={false}
            keyExtractor={(item, index) => index.toString()}
        />
    </View>)
}

export default GridViewVideos;
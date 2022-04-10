import React from 'react';
import {
    BottomTabBarProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';
import { HomeScreen, DiscoverScreen } from '../screens';
import FontAw from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles';
import { ThemeColors } from '../Constants/index';

const BottomBarNavigator = createBottomTabNavigator();

const CustomBottomTabBar = (props: BottomTabBarProps) => {
    const { descriptors, navigation, state } = props;

    const findRouteIndex = (routeName: string) =>
        state.routeNames.findIndex(e => e == routeName);

    return (
        <View style={[styles.tabContainer]}>
            <View style={[styles.tabButtonContainer, { backgroundColor: 'transparent' }]}>
                {state.routes
                    .map(({ key, name }) => (
                        <TouchableOpacity
                            onPress={() => {
                                if (name === 'Upload') {
                                    navigation.navigate('Upload_Modal')
                                    return;
                                }
                                if (findRouteIndex(name) !== state.index) {
                                    navigation.navigate(name)
                                }

                            }}
                            style={[
                                styles.tabButtons,
                                name === 'Upload' ? styles.uploadButton : null,
                            ]}

                            activeOpacity={0.6}
                            key={key}>
                            <FontAw
                                name={descriptors[key].options.title as string}
                                color={name === 'Upload' ? '#fff' : findRouteIndex(name) === state.index ? ThemeColors.secondryColor : findRouteIndex("Home") === state.index ? "#fff" : '#000'}
                                size={20}
                            />
                            {name !== 'Upload' ? (<Text style={styles.tabButtonText}>{name}</Text>) : null}


                        </TouchableOpacity>
                    ))}
            </View>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Profile') }}
                activeOpacity={.8}
                style={{ borderRadius: 200, width: 40, height: 40, backgroundColor: '#eee', position: 'absolute', right: 8, bottom: 8 }}
            >
            </TouchableOpacity>
        </View>
    );
};

const BottomTab: React.FC = () => {
    return (
        <BottomBarNavigator.Navigator

            initialRouteName={'home'}
            tabBar={props => <CustomBottomTabBar {...props} />}>
            <BottomBarNavigator.Screen
                options={{ title: 'home' }}
                name={'Home'}
                component={HomeScreen}
            />
            <BottomBarNavigator.Screen
                name={'Upload'}
                options={{ title: 'plus' }}
            >
                {() => null}
            </BottomBarNavigator.Screen>
            <BottomBarNavigator.Screen
                options={{ title: 'search' }}
                name={'Discover'}
                component={DiscoverScreen}
            />
        </BottomBarNavigator.Navigator>
    );
};

export default BottomTab;

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import {VideoPlayerGFX} from '../../components/BannerGraphics';
import {FontFamilies, ThemeColors} from '../../Constants';
import {useNavigation} from '@react-navigation/native';

const AuthSplashScreen = () => {
  const {width: ScreenWidth} = useWindowDimensions();
  const navigation = useNavigation();
  function navigateSignUpScreen() {
    return navigation.navigate('SignUp_Screen');
  }
  function navigateSignInScreen() {
    return navigation.navigate('SignIn_Screen');
  }
  return (
    <View
      style={{
        padding: 10,
        paddingTop: 20,
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          width: 80,
          height: 5,
          backgroundColor: ThemeColors.lightGrey,
          borderRadius: 10,
          position: 'absolute',
          top: 6,
          transform: [{translateX: (ScreenWidth - 80) / 2}],
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 40,
            width: 170,
            fontFamily: FontFamilies.AbhayaLibreSemiBold,
          }}>
          <Text style={{color: ThemeColors.secondryColor}}>Sign</Text> In
          Required
        </Text>
        <View style={{flexDirection: 'row'}}>
          <VideoPlayerGFX />
        </View>
        <Text
          style={{
            padding: 20,
            textAlign: 'center',
            fontFamily: FontFamilies.ComfortaaLight,
          }}>
          You have to signin your account before perfrom any action{' '}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={navigateSignInScreen}
          style={styles.actionButton}>
          <Text style={styles.actionButtonText}>SignIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={navigateSignUpScreen}
          style={[
            styles.actionButton,
            {
              backgroundColor: '#fff',
              borderWidth: 2,
              borderColor: ThemeColors.secondryColor,
            },
          ]}>
          <Text
            style={[
              styles.actionButtonText,
              {color: ThemeColors.secondryColor},
            ]}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthSplashScreen;

const styles = StyleSheet.create({
  actionButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColors.secondryColor,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  actionButtonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: FontFamilies.AbhayaLibreSemiBold,
  },
});

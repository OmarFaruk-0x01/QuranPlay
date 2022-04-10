import React, {useEffect} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {BottomTab} from './navigations';
import {
  PostPreviewScreen,
  ProfileScreen,
  UploadScreen,
  EditProfileScreen,
} from './screens';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UploadReducerActions} from './Redux/actions';
import {
  AuthSplashScreen,
  FotgotAndValid,
  SignInScreen,
  SignUpScreen,
  ValidationScreen,
} from './screens/Auth';
import {requestStoragePermission} from './Helpers';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const Setting = () => {
  return (
    <View>
      <Text>Modal</Text>
    </View>
  );
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isLogedIn = true;
  const {LoadLocalVideos} = bindActionCreators(UploadReducerActions, dispatch);
  useEffect(() => {
    SplashScreen.hide();
    requestStoragePermission((granted, error) => {
      if (granted) return;
    });
  }, []);

  function renderPrivateScreens() {
    return (
      <>
        <Stack.Screen
          options={{
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,
          }}
          name="Upload_Modal"
          component={UploadScreen}
        />
        <Stack.Screen
          options={{
            cardOverlayEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{
            ...TransitionPresets.ScaleFromCenterAndroid,
          }}
          name="Post_PreviewScreen"
          component={PostPreviewScreen}
        />
        <Stack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="Edit_ProfileScreen"
          component={EditProfileScreen}
        />
        <Stack.Screen name="Setting" component={Setting} />
      </>
    );
  }

  function renderPublicScreens() {
    return (
      <>
        <Stack.Screen
          options={{
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,
          }}
          name="Upload_Modal"
          component={AuthSplashScreen}
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,
          }}
          name="Profile"
          component={AuthSplashScreen}
        />
        <Stack.Screen
          options={{
            cardOverlayEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="SignUp_Screen"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="SignIn_Screen"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="FotgotAndValid"
          component={FotgotAndValid}
        />
        <Stack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="Validation"
          component={ValidationScreen}
        />
      </>
    );
  }

  function renderScreens() {
    if (isLogedIn) return renderPrivateScreens();
    return renderPublicScreens();
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        initialRouteName={'Main'}
        headerMode={'none'}
        screenOptions={() => {
          return {
            ...TransitionPresets.ScaleFromCenterAndroid,
          };
        }}>
        <Stack.Screen name="Main" component={BottomTab} />
        {renderScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

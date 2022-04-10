import React from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  ActionButton,
  InputBox,
  SocialMethodsSection,
} from '../../components/Forms';
import {FontFamilies, ThemeColors} from '../../Constants';
import {useNavigation} from '@react-navigation/native';

function renderBackButton() {
  const nav = useNavigation();
  return (
    <View style={{paddingVertical: 10}}>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <AntDesign name={'back'} size={20} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
}

function DetailedSection({
  imagePath,
  title,
  subtitle,
}: {
  imagePath: any;
  title: string;
  subtitle: string;
}) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{width: 100, height: 100}}
        resizeMode={'contain'}
        source={imagePath}
      />
      <Text style={{fontFamily: FontFamilies.ComfortaaBold, fontSize: 16}}>
        {title}
      </Text>
      <Text style={{fontFamily: FontFamilies.ComfortaaRegular, fontSize: 14}}>
        {subtitle}
      </Text>
    </View>
  );
}

const SignInScreen = () => {
  const nav = useNavigation();
  function navigateToSignUp() {
    nav.replace('SignUp_Screen');
  }
  function navigateToForgotValid() {
    // nav.replace('FotgotAndValid');
    nav.replace('Validation');
  }
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 10}}>
      {renderBackButton()}
      <StatusBar
        hidden={true}
        animated={true}
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
      <DetailedSection
        imagePath={require('../../../assets/images/logo.png')}
        title={'Welcome back'}
        subtitle={'Do good dids for hereafter'}
      />
      <SocialMethodsSection />
      <View style={{paddingTop: 10}}>
        <InputBox placeholder={'Email'} type={'email'} />
        <InputBox placeholder={'Password'} type={'password'} />
      </View>
      <View
        style={{
          padding: 4,
          alignItems: 'flex-end',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={navigateToForgotValid}
          style={{marginHorizontal: 4}}>
          <Text
            style={{
              color: ThemeColors.secondryColor,
              fontFamily: FontFamilies.ComfortaaBold,
              fontSize: 12,
            }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <ActionButton antDesignName={'login'} text={'Log In'} />
      <View
        style={{
          padding: 10,
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontFamily: FontFamilies.ComfortaaBold, fontSize: 10}}>
          Haven't any account?
        </Text>
        <TouchableOpacity
          onPress={navigateToSignUp}
          style={{marginHorizontal: 4}}>
          <Text
            style={{
              color: ThemeColors.secondryColor,
              fontFamily: FontFamilies.ComfortaaBold,
              fontSize: 12,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {FontFamilies, ThemeColors} from '../../Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  ActionButton,
  CheckBox,
  InputBox,
  SocialMethodsSection,
} from '../../components/Forms';

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

const SignUpScreen = () => {
  const nav = useNavigation();
  function navigateToSignIn() {
    nav.replace('SignIn_Screen');
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
        title={'Join to Start Spreading Islam'}
        subtitle={'Do good dids for hereafter'}
      />
      <SocialMethodsSection />
      <View style={styles.FormContainer}>
        <InputBox placeholder={'Name'} type={'text'} />
        <InputBox placeholder={'Email'} type={'email'} />
        <InputBox placeholder={'Password'} type={'password'} />
        <InputBox placeholder={'Confirm Password'} type={'password'} />
      </View>
      <View>
        <CheckBox
          textStyle={styles.CheckBoxText}
          text={'I agree with the term & conditions.'}
        />
      </View>
      <ActionButton antDesignName={'adduser'} text={'Join Us'} />
      <View
        style={{
          padding: 10,
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontFamily: FontFamilies.ComfortaaBold, fontSize: 10}}>
          Have a account?
        </Text>
        <TouchableOpacity
          onPress={navigateToSignIn}
          style={{marginHorizontal: 4}}>
          <Text
            style={{
              color: ThemeColors.secondryColor,
              fontFamily: FontFamilies.ComfortaaBold,
              fontSize: 12,
            }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  FormContainer: {
    paddingVertical: 10,
  },
  CheckBoxText: {
    fontFamily: FontFamilies.ComfortaaMedium,
    fontSize: 13,
    marginLeft: 6,
    top: -1,
  },
});

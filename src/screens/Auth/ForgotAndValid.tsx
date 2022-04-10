import React from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ActionButton, InputBox} from '../../components/Forms';
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

const FotgotAndValid = () => {
  const nav = useNavigation();
  function navigateToSignUp() {
    nav.replace('SignUp_Screen');
  }
  function navigateToForgotValid() {
    nav.replace('FotgotAndValid');
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
        title={'Forgot Password'}
        subtitle={'Reset you old password to a new'}
      />

      <View style={{paddingTop: 10}}>
        <InputBox placeholder={'Email'} type={'email'} />
      </View>

      <ActionButton antDesignName={'link'} text={'Send Code'} />
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: ThemeColors.lightGrey,
          marginVertical: 10,
        }}
      />

      <View style={{paddingTop: 10}}>
        <InputBox disabled placeholder={'Code'} type={'number'} />
      </View>

      <ActionButton disabled antDesignName={'checkcircle'} text={'Valided'} />
    </View>
  );
};

export default FotgotAndValid;

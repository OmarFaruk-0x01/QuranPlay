import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {ActionButton, InputBox} from '../../components/Forms';
import {FontFamilies} from '../../Constants';

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

const ValidationScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 30,
      }}>
      <StatusBar
        hidden={true}
        animated={true}
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
      <DetailedSection
        imagePath={require('../../../assets/images/logo.png')}
        title={'Validation'}
        subtitle={'Enter 6 digit code'}
      />

      <View style={{paddingTop: 10}}>
        <InputBox placeholder={'Code'} type={'number'} />
      </View>

      <ActionButton disabled antDesignName={'checkcircle'} text={'Vaild'} />
    </View>
  );
};

export default ValidationScreen;

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {FontFamilies, ThemeColors} from '../../Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

function SocialMethodsSection() {
  return (
    <View style={styles.SocialMethodsSection_Container}>
      <TouchableOpacity style={styles.socialButtons}>
        <AntDesign
          name={'google'}
          size={20}
          color={ThemeColors.secondryColor}
        />
        <Text style={styles.socialButtonsText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButtons}>
        <AntDesign
          name={'facebook-square'}
          size={20}
          color={ThemeColors.secondryColor}
        />
        <Text style={styles.socialButtonsText}>Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SocialMethodsSection;

const styles = StyleSheet.create({
  socialButtons: {
    flex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 6,
  },
  socialButtonsText: {
    top: -2,
    fontFamily: FontFamilies.ComfortaaBold,
    fontSize: 16,
    color: ThemeColors.primaryColor,
    marginHorizontal: 8,
  },
  SocialMethodsSection_Container: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

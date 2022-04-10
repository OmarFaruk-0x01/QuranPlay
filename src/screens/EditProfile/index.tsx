import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HeaderContainer: React.FC<{headerText: string}> = ({headerText}) => {
  return (
    <View style={styles.headerContainer}>
      <AntDesign name={'back'} color={'#000'} size={20} />
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );
};

const EditProfileScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <HeaderContainer headerText={'Edit Profile'} />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  viewContainer: {},
  headerContainer: {},
  headerText: {},
});

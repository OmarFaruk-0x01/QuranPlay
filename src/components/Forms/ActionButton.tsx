import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FontFamilies, ThemeColors} from '../../Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ActionButton = ({
  disabled,
  text,
  antDesignName,
}: {
  antDesignName: string;
  disabled?: Boolean;
  text: string;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.actionButton,
        {
          backgroundColor: disabled
            ? ThemeColors.lightGrey
            : ThemeColors.secondryColor,
        },
      ]}>
      <AntDesign
        name={antDesignName}
        size={20}
        color={!disabled ? '#fff' : ThemeColors.whiterGray}
      />
      <Text
        style={[
          styles.actionButtonText,
          {color: !disabled ? '#fff' : ThemeColors.whiterGray},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: ThemeColors.secondryColor,
  },
  actionButtonText: {
    fontFamily: FontFamilies.ComfortaaBold,
    marginHorizontal: 5,
    fontSize: 15,
    top: -2,
  },
});

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
} from 'react-native';

import {FontFamilies, ThemeColors} from '../../Constants';

import Feather from 'react-native-vector-icons/Feather';

const CheckBox = ({
  text,
  textStyle,
  defaultValue,
  onValueChange,
}: {
  text: string;
  textStyle?: TextStyle;
  onValueChange?: Function;
  defaultValue?: false | true;
}) => {
  const [value, setValue] = useState(defaultValue);
  function onPress() {
    setValue(!value);
  }
  useEffect(() => {
    onValueChange && onValueChange(value);
  }, [value]);
  return (
    <View style={styles.CheckBox}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Feather
          name={value ? 'check-circle' : 'circle'}
          size={18}
          color={value ? ThemeColors.secondryColor : '#000'}
        />
      </TouchableOpacity>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

export default CheckBox;
const styles = StyleSheet.create({
  CheckBox: {
    flexDirection: 'row',

    alignItems: 'center',
    marginVertical: 2,
  },
});

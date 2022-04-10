import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import InoIcons from 'react-native-vector-icons/Ionicons';
import {FontFamilies, ThemeColors} from '../../Constants';

const InputBox = React.forwardRef(function (
  {
    placeholder,
    type,
    disabled,
  }: {
    placeholder: string;
    type: string;
    disabled?: boolean;
  },
  forRef,
) {
  const [showPass, setShowPass] = useState(false);
  const [validEmail, setVaildEmail] = useState<boolean | null>(null);
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [value, setValue] = useState('');
  useEffect(() => {
    forRef = value;
  });
  function toggoleShow() {
    setShowPass(!showPass);
  }
  function onChange(t: string) {
    setValue(t);
  }
  function checkValidEmail() {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(validRegex)) {
      setVaildEmail(true);
    } else {
      setVaildEmail(false);
    }
  }
  function checkValidator() {
    switch (type) {
      case 'email':
        return checkValidEmail();
      default:
        null;
    }
  }
  function renderActionIcon() {
    switch (type) {
      case 'password': {
        if (showPass) {
          return (
            <TouchableOpacity onPress={toggoleShow} style={styles.inputAction}>
              <InoIcons name={'eye-outline'} size={20} color={'#000'} />
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity onPress={toggoleShow} style={styles.inputAction}>
              <InoIcons name={'eye-off-outline'} size={20} color={'#000'} />
            </TouchableOpacity>
          );
        }
      }
      case 'email': {
        if (validEmail !== null) {
          return (
            <InoIcons
              style={styles.inputAction}
              name={validEmail ? 'ios-checkmark-sharp' : 'close'}
              size={20}
              color={validEmail ? '#00ff00' : 'red'}
            />
          );
        }
      }
      default:
        null;
    }
  }

  return (
    <View
      style={[
        styles.inputBox,
        {
          borderColor: disabled
            ? ThemeColors.whiterGray
            : (type === 'email' && validEmail !== null && !validEmail) ||
              (type === 'password' && passwordMatch !== null && !passwordMatch)
            ? 'red'
            : ThemeColors.lightGrey,
        },
      ]}>
      <TextInput
        editable={!disabled}
        secureTextEntry={type === 'password' && value.length > 0 && !showPass}
        value={value}
        onChangeText={onChange}
        onBlur={checkValidator}
        style={[
          styles.input,
          {
            fontFamily: FontFamilies.ComfortaaLight,
            paddingRight: type !== 'text' ? 30 : 0,
          },
        ]}
        placeholder={placeholder}
      />
      {renderActionIcon()}
    </View>
  );
});

export default InputBox;

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    borderWidth: 1,
    borderColor: ThemeColors.lightGrey,
    borderRadius: 5,
    marginVertical: 4,
  },
  input: {
    borderRadius: 5,
    width: '100%',
    height: '100%',
    fontSize: 15,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontFamily: FontFamilies.ComfortaaMedium,
  },
  inputAction: {
    position: 'absolute',
    right: 6,
    top: 9,
  },
});

import React from 'react';
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {primaryColor} from '../../../constant/color';

interface IButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  text: string;
  width?: DimensionValue;
  height?: DimensionValue;
  IStyleBtn?: StyleProp<ViewStyle>;
  IStyleTxt?: StyleProp<TextStyle>;
  handleClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  variant,
  text,
  width = '85%',
  height = 50,
  IStyleBtn,
  IStyleTxt,
  handleClick,
}) => {
  const onClick = () => {
    if (handleClick) {
      handleClick();
    }
  };
  const styleBtn =
    variant === 'primary'
      ? styles.primaryBtn
      : variant === 'secondary'
      ? styles.secondaryBtn
      : styles.tertiaryBtn;
  const styleTxt =
    variant === 'primary'
      ? styles.primaryTxt
      : variant === 'secondary'
      ? styles.secondaryTxt
      : styles.tertiaryTxt;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        styleBtn,
        {width: width, height: height},
        IStyleBtn,
      ]}
      onPress={onClick}>
      <Text style={[styles.text, styleTxt, IStyleTxt]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtn: {
    backgroundColor: '#1D059A',
  },
  secondaryBtn: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.3,
  },
  tertiaryBtn: {
    borderColor: '#1D059A',
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Inter-semibold',
    fontWeight: 'bold',
  },
  primaryTxt: {
    color: 'white',
  },
  secondaryTxt: {
    color: 'black',
  },
  tertiaryTxt: {
    color: primaryColor,
  },
});

export default Button;

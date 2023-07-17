import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {primaryColor} from '../../../constant/color';

interface ISpeechProps {
  content: string;
  position: string;
}

interface ITriangleProps {
  styled_triangle: StyleProp<ViewStyle>;
}

const Triangle: React.FC<ITriangleProps> = ({styled_triangle}) => {
  return <View style={[triangle_s.triangle, styled_triangle]} />;
};

const triangle_s = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
});

const SpeechBubble: React.FC<ISpeechProps> = ({content, position}) => {
  const bubbleStyle =
    position === 'left' ? styles.leftBubble : styles.rightBubble;
  const arrowStyle = position === 'left' ? styles.leftArrow : styles.rightArrow;
  const textColor = position === 'left' ? styles.contentL : styles.contentR;

  return (
    <View style={[styles.container, bubbleStyle]}>
      <Triangle styled_triangle={arrowStyle} />
      <Text style={textColor}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  leftBubble: {
    backgroundColor: '#EDEDED',
    borderRadius: 30,
    marginRight: 'auto',
    marginLeft: 20,
  },
  rightBubble: {
    backgroundColor: '#007AFF',
    borderRadius: 30,
    marginLeft: 'auto',
    marginRight: 20,
  },
  arrow: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: '50%',
    transform: [{rotate: '90deg'}],
    backgroundColor: 'transparent',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  leftArrow: {
    borderBottomColor: '#EDEDED',
    transform: [{rotate: '-135deg'}],
    position: 'absolute',
    bottom: -8,
    left: -8,
  },
  rightArrow: {
    borderBottomColor: '#007AFF',
    transform: [{rotate: '135deg'}],
    position: 'absolute',
    bottom: -8,
    right: -8,
  },
  contentL: {
    color: primaryColor,
  },
  contentR: {
    color: 'white',
  },
});

export default SpeechBubble;

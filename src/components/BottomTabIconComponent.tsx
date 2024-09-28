import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {getHeight, getWidth} from '../utils/Utils';

interface BottomTabIconProps {
  color: string;
  source: ImageSourcePropType;
}
const BottomTabIcon = (props: BottomTabIconProps) => {
  return (
    <Image
      source={props.source}
      style={{tintColor: props.color, height: getHeight(5), width: getWidth(5)}}
      resizeMode="contain"
    />
  );
};

export default BottomTabIcon;

import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const getHeight = (percent: number) => {
  const calculatedHeight = (windowHeight * percent) / 100;
  return calculatedHeight;
};

export const getWidth = (percent: number) => {
  const calculatedWidth = (windowWidth * percent) / 100;
  return calculatedWidth;
};

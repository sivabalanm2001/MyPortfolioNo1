import {StyleSheet} from 'react-native';
import colorConstants from '../constants/ColorConstants';
import {getHeight, getWidth} from '../utils/Utils';

export default StyleSheet.create({
  primary_container: {
    flex: 1,
    backgroundColor: colorConstants.primary_background_color,
  },
  search_screen_container_style: {
    flex: 1,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
  },
});

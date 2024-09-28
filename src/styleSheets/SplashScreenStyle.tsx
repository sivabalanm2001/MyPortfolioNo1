import {StyleSheet} from 'react-native';
import colorConstants from '../constants/ColorConstants';

export default StyleSheet.create({
  primary_container: {
    flex: 1,
    backgroundColor: colorConstants.primary_background_color,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_header_style: {
    fontSize: 24,
    color: colorConstants.primary_text_color,
    fontWeight: '600',
  },
});

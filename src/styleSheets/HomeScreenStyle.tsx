import {StyleSheet} from 'react-native';
import colorConstants from '../constants/ColorConstants';
import {getHeight, getWidth} from '../utils/Utils';

export default StyleSheet.create({
  primary_container: {
    flex: 1,
    backgroundColor: colorConstants.primary_background_color,
  },
  home_screen_conatiner_style: {
    flex: 1,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
  },

  banner_image_style: {
    height: getHeight(20),
    width: '100%',
  },

  banner2_image_style: {
    marginVertical: 10,
    height: getHeight(12),
    width: '100%',
  },

  header_text_style: {
    fontSize: 20,
    fontWeight: '600',
    color: colorConstants.primary_text_color,
  },

  category_header_style: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  view_all_text_style: {
    fontSize: 14,
    fontWeight: '500',
    color: colorConstants.secondary_button_text_color,
  },
});

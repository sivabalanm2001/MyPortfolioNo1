import {StyleSheet} from 'react-native';
import colorConstants from '../constants/ColorConstants';
import {getHeight, getWidth} from '../utils/Utils';

export default StyleSheet.create({
  primary_container: {
    flex: 1,
    backgroundColor: colorConstants.primary_background_color,
  },
  cart_screen_conatiner_style: {
    flex: 1,
    justifyContent: 'space-between',
  },

  header_container_style: {
    height: getHeight(6),
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderColor: colorConstants.secondary_border_color,
    borderBottomWidth: 2,
  },

  header_text_style: {
    fontSize: 18,
    color: colorConstants.primary_text_color,
    fontWeight: '500',
  },

  items_text_style: {
    fontSize: 14,
    color: colorConstants.secondary_text_color,
  },

  total_amount_outer_container: {
    height: getHeight(8),
    width: '100%',
    justifyContent: 'space-evenly',
    backgroundColor: colorConstants.secondary_border_color,
    paddingHorizontal: 10,
  },
  total_amount_inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total_amount_text_style: {
    fontSize: 20,
    color: colorConstants.primary_text_color,
    fontWeight: '600',
  },
  total_savings_text_style: {
    fontSize: 16,
    color: colorConstants.primary_button_color,
  },

  final_total_outer_container: {
    height: getHeight(8),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colorConstants.secondary_button_color,
    paddingHorizontal: 10,
  },

  cart_screen_bottom_container: {},

  checkout_button_style: {
    backgroundColor: colorConstants.primary_button_color,
    borderRadius: 7,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  checkout_button_text_style: {
    color: colorConstants.primary_button_text_color,
  },

  total_text_style: {
    color: colorConstants.primary_button_text_color,
    fontSize: 14,
  },
});

import {StyleSheet} from 'react-native';
import colorConstants from '../constants/ColorConstants';
import {getHeight, getWidth} from '../utils/Utils';

export default StyleSheet.create({
  primary_container: {
    flex: 1,
    backgroundColor: colorConstants.primary_background_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_image_style: {
    height: getHeight(12),
    width: getWidth(90),
    marginBottom: '7%',
  },
  login_header_text: {
    fontSize: 24,
    color: colorConstants.primary_text_color,
    fontWeight: '400',
    marginBottom: '5%',
  },
  login_container: {},
  email_text_input_container: {
    height: getHeight(7),
    width: getWidth(90),
    borderColor: colorConstants.primary_border_color,
    borderWidth: 1,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    marginBottom: '5%',
  },
  password_text_input_container: {
    height: getHeight(7),
    width: getWidth(90),
    flexDirection: 'row',
    borderColor: colorConstants.primary_border_color,
    borderWidth: 1,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: '5%',
  },
  error_text_style: {
    fontSize: 12,
    marginBottom: '2%',
  },

  register_container_style: {
    width: getWidth(90),
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  register_text_style: {
    fontSize: 16,
    fontWeight: '600',
    color: colorConstants.primary_button_color,
  },

  new_user_text_style: {
    fontSize: 16,
    marginRight: 7,
  },

  password_icon_style: {
    height: getHeight(3),
    width: getHeight(3),
  },

  email_text_input_style: {
    width: '100%',
  },

  password_text_input_style: {
    width: '90%',
  },
});

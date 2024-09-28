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
  error_text_style: {
    fontSize: 16,
    marginBottom: '2%',
  },

  register_content_text_style: {
    fontSize: 16,
    marginBottom: '5%',
  },

  register_bottom_container_style: {
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: getWidth(90),
  },

  existing_user_text_style: {
    fontSize: 16,
    marginRight: 7,
  },
  login_here_text_style: {
    fontSize: 16,
    fontWeight: '600',
    color: colorConstants.primary_button_color,
  },
});

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
  otp_content_text_style: {
    fontSize: 16,
    marginBottom: '5%',
    width: getWidth(90),
    textAlign: 'center',
  },
  error_text_style: {
    fontSize: 16,
    marginBottom: '2%',
  },
  otp_verification_container_style: {
    width: getWidth(60),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '7%',
  },
  otp_verification_text_feild_style: {
    borderColor: colorConstants.primary_border_color,
    borderWidth: 1,
    height: getHeight(5),
    width: getWidth(10),
    borderRadius: 10,
    padding: 5,
    textAlign: 'center',
  },

  otp_botttom_conatainer: {
    flexDirection: 'row',
    marginTop: '5%',
    width: getWidth(90),
    justifyContent: 'flex-start',
  },

  otp_not_received_text_style: {
    fontSize: 16,
    marginRight: 7,
  },

  otp_resend_text_style: {
    fontSize: 16,
    fontWeight: '600',
    color: colorConstants.primary_button_color,
  },
});

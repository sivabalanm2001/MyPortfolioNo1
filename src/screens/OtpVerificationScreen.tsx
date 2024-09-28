import {Image, Keyboard, Pressable, Text, TextInput, View} from 'react-native';
import OtpVerificationScreenStyle from '../styleSheets/OtpVerificationScreenStyle';
import textConstants from '../constants/TextConstants';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../types/navigation';
import routingPaths from '../constants/RoutingPaths';
import {useRef, useState} from 'react';
import imageConstants from '../constants/ImageConstants';

const OtpVerificationScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpError, setOtpError] = useState('');

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 3) {
      inputRefs[index + 1].current!.focus();
    }
    setOtpError('');
  };

  const validateOtp = () => {
    if (otp.includes('')) {
      setOtpError(textConstants.otp_error_text);
      return false;
    } else if (otp.some(digit => !/^\d$/.test(digit))) {
      setOtpError(textConstants.otp_error_text);
      return false;
    } else {
      return true;
    }
  };
  const handleOtpVerified = () => {
    Keyboard.dismiss();
    if (validateOtp()) {
      navigation.navigate(routingPaths.login_screen);
    }
  };
  return (
    <View style={OtpVerificationScreenStyle.primary_container}>
      <Image
          resizeMode="contain"
          style={OtpVerificationScreenStyle.logo_image_style}
          source={imageConstants.app_logo_image}
        />
      <View style={OtpVerificationScreenStyle.otp_verification_container_style}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={OtpVerificationScreenStyle.otp_verification_text_feild_style}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={text => handleOtpChange(text, index)}
            value={digit}
            returnKeyType={index === 3 ? 'done' : 'next'}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
                inputRefs[index - 1].current?.focus();
              }
            }}
          />
        ))}
      </View>
      {otpError && (
        <Text style={OtpVerificationScreenStyle.error_text_style}>
          {otpError}
        </Text>
      )}
      <Text style={OtpVerificationScreenStyle.otp_content_text_style}>
        {textConstants.otp_content_text}
      </Text>
      <PrimaryButton
        text={textConstants.proceed_text}
        onClick={() => {
          handleOtpVerified();
        }}
      />
      <View style={OtpVerificationScreenStyle.otp_botttom_conatainer}>
        <Text style={OtpVerificationScreenStyle.otp_not_received_text_style}>
          {textConstants.otp_not_received}
        </Text>
        <Pressable onPress={() => {}}>
          <Text style={OtpVerificationScreenStyle.otp_resend_text_style}>
            {textConstants.resend_text}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OtpVerificationScreen;

import {Image, Keyboard, Pressable, Text, TextInput, View} from 'react-native';
import RegisterScreenStyle from '../styleSheets/RegisterScreenStyle';
import {useState} from 'react';
import {NavigationProps} from '../types/navigation';
import {useNavigation} from '@react-navigation/native';
import textConstants from '../constants/TextConstants';
import routingPaths from '../constants/RoutingPaths';
import PrimaryButton from '../components/PrimaryButton';
import colorConstants from '../constants/ColorConstants';
import imageConstants from '../constants/ImageConstants';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  const emailController = () => {
    if (!email) {
      setEmailError(textConstants.email_text);
    } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
      setEmailError(textConstants.email_vaild_text);
      return false;
    } else {
      return true;
    }
  };

  const handleOtpVerigicationNavigate = () => {
    navigation.navigate(routingPaths.otp_verification_screen);
  };

  const handleLoginNavigate = () => {
    navigation.navigate(routingPaths.login_screen);
  };
  return (
    <View style={RegisterScreenStyle.primary_container}>
      <Image
          resizeMode="contain"
          style={RegisterScreenStyle.logo_image_style}
          source={imageConstants.app_logo_image}
        />
        <View style={RegisterScreenStyle.email_text_input_container}>
          <TextInput
            onFocus={() => {
              setEmailError('');
            }}
            autoCapitalize="none"
            returnKeyType="next"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            placeholderTextColor={colorConstants.secondary_text_color}
            placeholder={textConstants.register_placeholder_text}
          />
        </View>
        {emailError && (
          <Text style={RegisterScreenStyle.error_text_style}>{emailError}</Text>
        )}
        <Text style={RegisterScreenStyle.register_content_text_style}>
          {textConstants.register_content_text}
        </Text>
        <PrimaryButton
          text={textConstants.register_text}
          onClick={() => {
            Keyboard.dismiss();
            if (emailController()) {
              handleOtpVerigicationNavigate();
            }
          }}
        />
        <View style={RegisterScreenStyle.register_bottom_container_style}>
          <Text style={RegisterScreenStyle.existing_user_text_style}>
            {textConstants.existing_user_text}
          </Text>
          <Pressable
            onPress={() => {
              handleLoginNavigate();
            }}>
            <Text style={RegisterScreenStyle.login_here_text_style}>
              {textConstants.login_here_text}
            </Text>
          </Pressable>
        </View>
    </View>
  );
};

export default RegisterScreen;

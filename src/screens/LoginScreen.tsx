import {
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TextInputComponent,
  View,
} from 'react-native';
import LoginScreenStyle from '../styleSheets/LoginScreenStyle';
import textConstants from '../constants/TextConstants';
import {useRef, useState} from 'react';
import colorConstants from '../constants/ColorConstants';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../types/navigation';
import routingPaths from '../constants/RoutingPaths';
import imageConstants from '../constants/ImageConstants';
import {getHeight, getWidth} from '../utils/Utils';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const secondTextInputRef = useRef<TextInput>(null);
  const navigation = useNavigation<NavigationProps>();
  const focusNextInputField = () => {
    if (secondTextInputRef.current) {
      secondTextInputRef.current.focus();
    }
  };

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
  const passwordController = () => {
    if (!password) {
      setPasswordError(textConstants.password_text);
      return false;
    } else {
      return true;
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigation.navigate(routingPaths.main_tab);
  };

  const handleRegisterNavigate = () => {
    navigation.replace(routingPaths.register_screen);
  };

  return (
    <View style={LoginScreenStyle.primary_container}>
      <Image
        resizeMode="contain"
        style={LoginScreenStyle.logo_image_style}
        source={imageConstants.app_logo_image}
      />
      <View style={LoginScreenStyle.email_text_input_container}>
        <TextInput
          style={LoginScreenStyle.email_text_input_style}
          onFocus={() => {
            setEmailError('');
          }}
          autoCapitalize="none"
          returnKeyType="next"
          onChangeText={setEmail}
          value={email}
          onSubmitEditing={focusNextInputField}
          keyboardType="email-address"
          placeholderTextColor={colorConstants.secondary_text_color}
          placeholder={textConstants.email_text}
        />
      </View>
      {emailError && (
        <Text style={LoginScreenStyle.error_text_style}>{emailError}</Text>
      )}
      <View style={LoginScreenStyle.password_text_input_container}>
        <TextInput
          style={LoginScreenStyle.password_text_input_style}
          onFocus={() => {
            setPasswordError('');
          }}
          ref={secondTextInputRef}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={showPassword}
          placeholderTextColor={colorConstants.secondary_text_color}
          placeholder={textConstants.password_text}
        />
        <Pressable onPress={handleShowPassword}>
          <Image
            style={LoginScreenStyle.password_icon_style}
            resizeMode="contain"
            source={
              showPassword
                ? imageConstants.show_password_icon
                : imageConstants.hide_password_icon
            }
          />
        </Pressable>
      </View>
      {passwordError && (
        <Text style={LoginScreenStyle.error_text_style}>{passwordError}</Text>
      )}

      <PrimaryButton
        text={textConstants.login_button_text}
        onClick={() => {
          Keyboard.dismiss();
          if (emailController() && passwordController()) {
            handleLogin();
          }
        }}
      />
      <View style={LoginScreenStyle.register_container_style}>
        <Text style={LoginScreenStyle.new_user_text_style}>
          {textConstants.new_user_text}
        </Text>
        <Pressable
          onPress={() => {
            handleRegisterNavigate();
          }}>
          <Text style={LoginScreenStyle.register_text_style}>
            {textConstants.register_here_text}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

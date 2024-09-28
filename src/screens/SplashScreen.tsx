import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationProps} from '../types/navigation';
import routingPaths from '../constants/RoutingPaths';
import SplashScreenStyle from '../styleSheets/SplashScreenStyle';
const SplashScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    navigate();
  });

  const navigate = () => {
    setTimeout(() => {
      navigation.replace(routingPaths.login_screen);
    }, 3000);
  };
  return (
    <View style={SplashScreenStyle.primary_container}>
      <Text style={SplashScreenStyle.text_header_style}>Splash screen</Text>
    </View>
  );
};

export default SplashScreen;

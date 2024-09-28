import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import routingPaths from './src/constants/RoutingPaths';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import OtpVerificationScreen from './src/screens/OtpVerificationScreen';
import HomeScreen from './src/screens/HomeScreen';
import MyProfileScreen from './src/screens/MyProfileScreen';
import colorConstants from './src/constants/ColorConstants';
import SearchScreen from './src/screens/SearchScreen';
import MLScreen from './src/screens/MLScreen';
import OrderScreen from './src/screens/OrderScreen';
import imageConstants from './src/constants/ImageConstants';
import BottomTabIcon from './src/components/BottomTabIconComponent';
import CartScreen from './src/screens/CartScreen';
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={routingPaths.home_screen}
      backBehavior="none">
      <BottomTab.Screen
        name={routingPaths.home_screen}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarActiveTintColor: colorConstants.primary_text_color,
          tabBarInactiveTintColor: colorConstants.primary_text_color,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '400',
          },
          tabBarIcon: ({color}) => (
            <BottomTabIcon color={color} source={imageConstants.home_icon} />
          ),
        }}
      />
      <BottomTab.Screen
        name={routingPaths.search_screen}
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colorConstants.primary_text_color,
          tabBarInactiveTintColor: colorConstants.primary_text_color,
          tabBarLabel: 'Search',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '400',
          },
          tabBarIcon: ({color}) => (
            <BottomTabIcon color={color} source={imageConstants.search_icon} />
          ),
        }}
      />
      <BottomTab.Screen
        name={routingPaths.ml_screen}
        component={MLScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colorConstants.primary_text_color,
          tabBarInactiveTintColor: colorConstants.primary_text_color,
          tabBarLabel: 'ML',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '400',
          },
          tabBarIcon: ({color}) => (
            <BottomTabIcon color={color} source={imageConstants.home_icon} />
          ),
        }}
      />
      <BottomTab.Screen
        name={routingPaths.order_screen}
        component={OrderScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colorConstants.primary_text_color,
          tabBarInactiveTintColor: colorConstants.primary_text_color,
          tabBarLabel: 'Orders',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '400',
          },
          tabBarIcon: ({color}) => (
            <BottomTabIcon color={color} source={imageConstants.cart_icon} />
          ),
        }}
      />
      <BottomTab.Screen
        name={routingPaths.my_profile_screen}
        component={MyProfileScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colorConstants.primary_text_color,
          tabBarInactiveTintColor: colorConstants.primary_text_color,
          tabBarLabel: 'My Profile',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '400',
          },
          tabBarIcon: ({color}) => (
            <BottomTabIcon color={color} source={imageConstants.user_icon} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routingPaths.splash_screen}>
      <Stack.Screen
        name={routingPaths.splash_screen}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routingPaths.login_screen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routingPaths.register_screen}
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routingPaths.otp_verification_screen}
        component={OtpVerificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routingPaths.main_tab}
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routingPaths.order_screen}
        component={OrderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routingPaths.cart_screen}
        component={CartScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

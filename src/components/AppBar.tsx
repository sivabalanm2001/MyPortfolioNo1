import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {getHeight, getWidth} from '../utils/Utils';
import colorConstants from '../constants/ColorConstants';
import imageConstants from '../constants/ImageConstants';
import {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NavigationProps} from '../types/navigation';
import routingPaths from '../constants/RoutingPaths';

const AppBar = (props: {isHomePage: boolean; isOrderPage: boolean}) => {
  const [cartNumber, setCartNumber] = useState(5);
  const navigation = useNavigation<NavigationProps>();
  const handleNavigateMyCart = () => {
    navigation.replace(routingPaths.cart_screen);
  };

  return (
    <View style={styles.app_bar_style}>
      {props.isHomePage ? (
        <View style={styles.app_bar_container_style}>
          <Image
            resizeMode="cover"
            style={styles.logo_image_style}
            source={imageConstants.app_logo_image}
            alt="Logo not visible"></Image>

          <Pressable onPress={handleNavigateMyCart}>
            <View style={styles.cart_text_container_style}>
              <Text style={styles.cart_text_style}>{cartNumber}</Text>
            </View>
            <Image
              style={styles.cart_image_container_style}
              resizeMode="contain"
              source={imageConstants.basket_icon}
              alt="cart icon not visible"
            />
          </Pressable>
        </View>
      ) : (
        <View style={styles.app_bar_container_style}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={styles.back_image_container_style}
              resizeMode="cover"
              source={imageConstants.back_icon}
              alt="cart icon not visible"
            />
          </Pressable>
          {!props.isOrderPage ? (
            <Pressable onPress={handleNavigateMyCart}>
              <View style={styles.cart_text_container_style}>
                <Text style={styles.cart_text_style}>{cartNumber}</Text>
              </View>
              <Image
                style={styles.cart_image_container_style}
                resizeMode="contain"
                source={imageConstants.basket_icon}
                alt="cart icon not visible"
              />
            </Pressable>
          ) : (
            <></>
          )}
        </View>
      )}
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  app_bar_style: {overflow: 'hidden', paddingBottom: 5},
  app_bar_container_style: {
    backgroundColor: 'white',
    height: getHeight(7),
    width: getWidth(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 5,
  },

  logo_image_style: {
    height: getHeight(5),
    width: getWidth(35),
  },

  cart_image_container_style: {
    height: getHeight(6),
    width: getWidth(6),
  },

  back_image_container_style: {
    height: getHeight(4),
    width: getWidth(6),
  },

  cart_text_container_style: {
    height: 18,
    width: 18,
    backgroundColor: colorConstants.secondary_button_text_color,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    top: 12,
    left: 14,
    position: 'absolute',
    zIndex: 1,
  },

  cart_text_style: {
    fontSize: 12,
    color: colorConstants.primary_background_color,
  },
});

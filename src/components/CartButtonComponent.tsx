import {Pressable, StyleSheet, Text, View} from 'react-native';
import {getHeight, getWidth} from '../utils/Utils';
import colorConstants from '../constants/ColorConstants';

const CartButtonComponent = () => {
  return (
    <Pressable style={Styles.cart_button_style}>
      <View style={Styles.cart_button_style}>
        <Text style={Styles.cart_text_style}>Add cart</Text>
      </View>
    </Pressable>
  );
};

export default CartButtonComponent;

const Styles = StyleSheet.create({
  cart_button_style: {
    height: getHeight(5),
    width: getWidth(10),
    backgroundColor: 'red',
  },
  cart_text_style: {
    color: colorConstants.primary_button_text_color,
    padding: 20,
    fontSize: 20,
  },
});

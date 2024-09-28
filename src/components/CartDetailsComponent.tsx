import {Pressable, StyleSheet, Text, View} from 'react-native';
import {getHeight} from '../utils/Utils';
import colorConstants from '../constants/ColorConstants';
import CartButtonComponent from './cartButtonComponent';

const CartDetailsComponent = () => {
  return (
    <View style={Styles.cart_details_container_style}>
      <View style={Styles.cart_details_style}>
        <View>
          <Text style={Styles.product_text_style}>Product</Text>
          <Text style={Styles.farm_text_style}>Farm</Text>
        </View>
        <CartButtonComponent />
      </View>
      <View style={Styles.cart_price_details_conatiner_style}>
        <Text style={Styles.quantity_text_style}>800 gm</Text>
        <View style={Styles.cart_price_details_style}>
          <Text style={Styles.atucal_price_text_style}>2.23 KD</Text>
          <Text style={Styles.price_text_style}>2.23 KD</Text>
        </View>
      </View>
    </View>
  );
};

export default CartDetailsComponent;

const Styles = StyleSheet.create({
  cart_details_container_style: {
    height: getHeight(8),
    borderColor: colorConstants.primary_border_color,
    borderBottomWidth: 0.6,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  cart_details_style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cart_price_details_conatiner_style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cart_price_details_style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  product_text_style: {
    fontSize: 16,
    color: colorConstants.primary_text_color,
    fontWeight: '400',
  },
  farm_text_style: {
    fontSize: 16,
    color: colorConstants.primary_text_color,
    fontWeight: '400',
  },
  quantity_text_style: {
    fontSize: 14,
    color: colorConstants.primary_text_color,
    fontWeight: '400',
  },
  atucal_price_text_style: {
    fontSize: 14,
    color: colorConstants.secondary_text_color,
    fontWeight: '400',
    paddingHorizontal: 2,
    textDecorationLine: 'line-through',
  },
  price_text_style: {
    fontSize: 14,
    color: colorConstants.primary_text_color,
    fontWeight: '400',
    paddingHorizontal: 2,
  },
});

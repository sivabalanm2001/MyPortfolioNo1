import {FlatList, Pressable, Text, View} from 'react-native';
import CartScreenStyle from '../styleSheets/CartScreenStyle';
import AppBar from '../components/AppBar';
import textConstants from '../constants/TextConstants';
import {ScrollView} from 'react-native-gesture-handler';
import CartDetailsComponent from '../components/CartDetailsComponent';

const CartScreen = () => {
  const totalItems = 5;
  const totalAmt = 9.59;
  const totalSavings = 1.59;
  const finalTotal = 100;
  return (
    <View style={CartScreenStyle.primary_container}>
      <AppBar isHomePage={false} isOrderPage={true} />
      <View style={CartScreenStyle.cart_screen_conatiner_style}>
        <ScrollView>
          <View style={CartScreenStyle.header_container_style}>
            <Text style={CartScreenStyle.header_text_style}>
              {textConstants.my_cart_text}
            </Text>
            <Text style={CartScreenStyle.items_text_style}>
              {totalItems} {textConstants.items_text}
            </Text>
          </View>

          <CartDetailsComponent />
        </ScrollView>

        <View style={CartScreenStyle.cart_screen_bottom_container}>
          <View style={CartScreenStyle.total_amount_outer_container}>
            <View style={CartScreenStyle.total_amount_inner_container}>
              <Text style={CartScreenStyle.total_amount_text_style}>
                Total Amount
              </Text>
              <Text style={CartScreenStyle.total_amount_text_style}>
                {totalAmt} KD
              </Text>
            </View>
            <View style={CartScreenStyle.total_amount_inner_container}>
              <Text style={CartScreenStyle.total_savings_text_style}>
                Total Savings
              </Text>
              <Text style={CartScreenStyle.total_savings_text_style}>
                {totalSavings} KD
              </Text>
            </View>
          </View>

          <View style={CartScreenStyle.final_total_outer_container}>
            <View>
              <Text style={CartScreenStyle.total_text_style}>
                Total : {finalTotal} KD
              </Text>
              <Text style={CartScreenStyle.total_text_style}>
                Additional charges may apply.
              </Text>
            </View>
            <Pressable>
              <View style={CartScreenStyle.checkout_button_style}>
                <Text style={CartScreenStyle.checkout_button_text_style}>
                  Checkout
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

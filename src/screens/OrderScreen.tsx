import {Text, View} from 'react-native';
import AppBar from '../components/AppBar';
import OrderScreenStyle from '../styleSheets/OrderScreenStyle';

const OrderScreen = () => {
  return (
    <View style={OrderScreenStyle.primary_container}>
      <AppBar isOrderPage={false} isHomePage={false} />
    </View>
  );
};

export default OrderScreen;

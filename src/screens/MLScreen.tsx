import {Text, View} from 'react-native';
import MlScreenStyle from '../styleSheets/MlScreenStyle';
import AppBar from '../components/AppBar';

const MLScreen = () => {
  return (
    <View style={MlScreenStyle.primary_container}>
      <AppBar isOrderPage={false} isHomePage={false} />
    </View>
  );
};

export default MLScreen;

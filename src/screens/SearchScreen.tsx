import {Text, View} from 'react-native';
import SearchScreenStyle from '../styleSheets/SearchScreenStyle';
import AppBar from '../components/AppBar';
import SearchBoxComponent from '../components/SearchBoxComponent';

const SearchScreen = () => {
  return (
    <View style={SearchScreenStyle.primary_container}>
      <AppBar isHomePage={false} isOrderPage={false} />
      <View style={SearchScreenStyle.search_screen_container_style}>
        <SearchBoxComponent />
      </View>
    </View>
  );
};

export default SearchScreen;

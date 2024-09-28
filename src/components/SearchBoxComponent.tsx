import {Image, StyleSheet, TextInput, View} from 'react-native';
import colorConstants from '../constants/ColorConstants';
import {useState} from 'react';
import textConstants from '../constants/TextConstants';
import imageConstants from '../constants/ImageConstants';
import {getHeight, getWidth} from '../utils/Utils';

const SearchBoxComponent = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.search_conatiner}>
      <Image
        style={styles.search_icon_image}
        source={imageConstants.search_icon}
        resizeMode="contain"
      />
      <TextInput
        style={styles.search_text_style}
        onFocus={() => {
          setSearchText('');
        }}
        onChangeText={setSearchText}
        value={searchText}
        placeholderTextColor={colorConstants.secondary_text_color}
        placeholder={textConstants.seacrh_placeholder_text}
      />
    </View>
  );
};

export default SearchBoxComponent;

const styles = StyleSheet.create({
  search_conatiner: {
    flexDirection: 'row',
    height: getHeight(5),
    borderColor: colorConstants.primary_border_color,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: '5%',
    paddingHorizontal: 10,
  },
  search_icon_image: {
    height: getHeight(2),
    width: getHeight(2),
    marginRight: 5,
  },
  search_text_style: {
    width: '100%',
  },
});

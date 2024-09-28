import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import {getHeight, getWidth} from '../utils/Utils';
import colorConstants from '../constants/ColorConstants';

interface CategoriesComponentProps {
  image: {uri: string};
  headerText: string;
}

const CategoriesComponent = (props: CategoriesComponentProps) => {
  return (
    <View style={styles.category_conatiner_style}>
      <Image
        style={styles.image_container}
        source={props.image}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.heading_text_style}>{props.headerText}</Text>
      </View>
    </View>
  );
};

export default CategoriesComponent;

const styles = StyleSheet.create({
  category_conatiner_style: {
    height: getHeight(16),
    width: getWidth(35),
    margin: 10,
    borderRadius: 15,
    backgroundColor: colorConstants.secondary_background_color,
    justifyContent: 'space-between',
    shadowColor: colorConstants.primary_shadow_color,
    shadowOpacity: 1,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 5,
    elevation: 6,
  },

  heading_text_style: {
    fontSize: 18,
    fontWeight: '600',
    width: '100%',
    padding: 4,
    backgroundColor: colorConstants.primary_button_color,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: colorConstants.primary_button_text_color,
    textAlign: 'center',
    justifyContent: 'center',
  },

  image_container: {
    height: getHeight(12),
    width: getWidth(35),
  },
});

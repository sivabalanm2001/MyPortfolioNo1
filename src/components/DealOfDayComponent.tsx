import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import textConstants from '../constants/TextConstants';
import colorConstants from '../constants/ColorConstants';
import {getHeight, getWidth} from '../utils/Utils';

interface DealOfDayComponentProps {
  image: {uri: string};
  productText: string;
  farmText: string;
  quantityText: string;
  priceText: string;
}

const DealOfDayComponent = (props: DealOfDayComponentProps) => {
  return (
    <View style={styles.deal_of_day_conatiner_style}>
      <Image
        style={styles.image_container_style}
        source={props.image}
        resizeMode="contain"
      />
      <View style={styles.text_conatiner_style}>
        <Text style={styles.product_text_style}>{props.productText}</Text>
        <Text style={styles.farm_text_style}>{props.farmText}</Text>
        <View style={styles.product_quantity_quality_style}>
          <Text style={styles.quantity_text_style}>{props.quantityText}</Text>
          <Text style={styles.quality_text_style}>{props.priceText}</Text>
        </View>
      </View>
      <Pressable style={styles.add_to_cart_button_style}>
        <Text style={styles.button_text_style}>
          {textConstants.add_to_cart_text}
        </Text>
      </Pressable>
    </View>
  );
};

export default DealOfDayComponent;

const styles = StyleSheet.create({
  deal_of_day_conatiner_style: {
    height: getHeight(30),
    width: getWidth(50),
    margin: 10,
    justifyContent: 'space-between',
    backgroundColor: colorConstants.secondary_background_color,
    borderRadius: 17,
    borderColor: colorConstants.primary_border_color,
    shadowColor: colorConstants.primary_shadow_color,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 4,
  },

  image_container_style: {
    height: getHeight(16),
    width: getWidth(50),
  },

  text_conatiner_style: {
    paddingHorizontal: 10,
  },
  product_text_style: {
    fontSize: 18,
    marginBottom: 2,
    fontWeight: '600',
    color: colorConstants.primary_text_color,
  },

  farm_text_style: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '400',
    color: colorConstants.primary_text_color,
  },

  product_quantity_quality_style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  quantity_text_style: {
    fontSize: 16,
  },

  quality_text_style: {
    fontSize: 16,
  },

  add_to_cart_button_style: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorConstants.primary_button_color,
    borderBottomRightRadius: 17,
    borderBottomLeftRadius: 17,
  },

  button_text_style: {
    fontSize: 15,
    color: colorConstants.primary_button_text_color,
    padding: 10,
  },
});

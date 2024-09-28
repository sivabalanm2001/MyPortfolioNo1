import {Pressable, StyleSheet, Text} from 'react-native';
import {getHeight, getWidth} from '../utils/Utils';
import colorConstants from '../constants/ColorConstants';

interface PrimaryButtonInterface {
  text: string;
  onClick: Function;
}

const PrimaryButton = (props: PrimaryButtonInterface) => {
  return (
    <Pressable
      style={styles.primary_button_style}
      onPress={() => {
        props.onClick();
      }}>
      <Text style={styles.button_text_styles}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primary_button_style: {
    height: getHeight(6),
    width: getWidth(90),
    backgroundColor: colorConstants.primary_button_color,
    borderColor: colorConstants.primary_border_color,
    borderWidth: 1,
    borderRadius: 8,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  button_text_styles: {
    fontSize: 24,
    fontWeight: '400',
    color: colorConstants.primary_button_text_color,
  },
});

export default PrimaryButton;

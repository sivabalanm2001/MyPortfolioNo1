import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import colorConstants from '../constants/ColorConstants';

interface LoaderProps {
  isLoading: boolean;
}
const Loader = (props: LoaderProps) => {
  return (
    <Spinner
      visible={props.isLoading}
      customIndicator={
        <ActivityIndicator size="large" color={colorConstants.primary_text_color} />
      }
    />
  );
};

export default Loader;

const styles = StyleSheet.create({});
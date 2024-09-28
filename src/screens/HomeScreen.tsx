import {
  FlatList,
  Image,
  Text,
  View,
  Pressable,
  RefreshControl,
} from 'react-native';
import HomeScreenStyle from '../styleSheets/HomeScreenStyle';
import AppBar from '../components/AppBar';
import {ScrollView} from 'react-native-gesture-handler';
import textConstants from '../constants/TextConstants';
import CategoriesData from '../../mock_data/categories_mock_data.json';
import DealOdDayData from '../../mock_data/deal_of_day_mock_data.json';
import CategoriesComponent from '../components/CartegoriesComponent';
import imageConstants from '../constants/ImageConstants';
import DealOfDayComponent from '../components/DealOfDayComponent';
import {useEffect, useState} from 'react';
import React from 'react';
import Loader from '../components/LoaderComponent';

const HomeScreen = () => {
  return (
    <View style={HomeScreenStyle.primary_container}>
      <AppBar isHomePage={true} isOrderPage={false} />
      <ScrollView>
        <View style={HomeScreenStyle.home_screen_conatiner_style}>
          <Image
            style={HomeScreenStyle.banner_image_style}
            resizeMode="contain"
            source={imageConstants.banner_1}
          />

          {/* Categories */}
          <View>
            <View style={HomeScreenStyle.category_header_style}>
              <Text style={HomeScreenStyle.header_text_style}>
                {textConstants.categories_text}
              </Text>
              <Pressable>
                <Text style={HomeScreenStyle.view_all_text_style}>
                  {textConstants.veiw_all_text}
                </Text>
              </Pressable>
            </View>

            <FlatList
              data={CategoriesData}
              horizontal
              renderItem={({item}) => {
                return (
                  <CategoriesComponent
                    headerText={item.headerText}
                    image={imageConstants.app_logo_image}
                  />
                );
              }}
            />
          </View>

          <Image
            style={HomeScreenStyle.banner2_image_style}
            resizeMode="contain"
            source={imageConstants.banner_2}
          />
          {/* Deal of the Day */}
          <View>
            <View style={HomeScreenStyle.category_header_style}>
              <Text style={HomeScreenStyle.header_text_style}>
                {textConstants.deal_of_day_text}
              </Text>
              <Pressable>
                <Text style={HomeScreenStyle.view_all_text_style}>
                  {textConstants.veiw_all_text}
                </Text>
              </Pressable>
            </View>

            <FlatList
              data={DealOdDayData}
              horizontal
              renderItem={({item}) => {
                return (
                  <DealOfDayComponent
                    farmText={item.farmText}
                    image={imageConstants.app_logo_image}
                    priceText={item.priceText}
                    productText={item.productText}
                    quantityText={item.quantityText}
                  />
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

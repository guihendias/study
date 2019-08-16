import React from 'react';
import { Image, View, Text, ImageBackground } from 'react-native';

import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';

import homeIcon from '~/assets/img/home_menu.png';
import tagIcon from '~/assets/img/tag_menu.png';

import Dashboard from './pages/Dashboard';
import ProductDetails from './pages/Dashboard/ProductDetails';
import Category from './pages/Dashboard/Category';

import About from './pages/About';

import logo from '~/assets/img/logo_menu.png';
import pattern from '~/assets/img/menu_pattern.png';

import fonts from '~/util/fonts';

const DashboardStack = createStackNavigator({
  Dashboard,
  ProductDetails,
  Category,
});

const AboutStack = createStackNavigator({
  About,
});

export default createAppContainer(
  createDrawerNavigator(
    {
      Dashboard: {
        screen: DashboardStack,
        navigationOptions: {
          title: 'Home',
          drawerIcon: (
            <Image source={homeIcon} style={{ width: 24, height: 24 }} />
          ),
        },
      },
      About: {
        screen: AboutStack,
        navigationOptions: {
          title: 'Sobre o aplicativo',
          drawerIcon: (
            <Image source={tagIcon} style={{ width: 24, height: 24 }} />
          ),
        },
      },
    },
    {
      contentOptions: {
        activeTintColor: '#5e2a84',
        labelStyle: {
          fontSize: 14,
          ...fonts.medium,
        },
      },
      contentComponent: props => (
        <SafeAreaView
          style={{ backgroundColor: '#fcfcfc', height: '100%' }}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >
          <ImageBackground
            source={pattern}
            resizeMode="stretch"
            style={{ width: '100%', height: 160 }}
          >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    backgroundColor: '#f15025',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 20,
                    marginVertical: 36,
                  }}
                >
                  <Image source={logo} style={{ width: 35, height: 38 }} />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  margin: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    letterSpacing: -0.6,
                    fontFamily: 'Pacifico-Regular',
                    fontWeight: '500',
                    color: '#fff',
                  }}
                >
                  a Lodjinha
                </Text>
              </View>
            </View>
          </ImageBackground>

          <DrawerItems {...props} />
        </SafeAreaView>
      ),
    }
  )
);

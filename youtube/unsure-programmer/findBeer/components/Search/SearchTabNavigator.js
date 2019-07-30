import React, { Component } from "react";
import { Text, View } from "react-native";

import { Footer, FooterTab, Button, Icon } from "native-base";

import { createBottomTabNavigator } from "react-navigation";
import SearchTab from "./tabNavigator/SearchTab";
import FavoritesTab from "./tabNavigator/FavoritesTab";

export default (SearchTabNavigator = createBottomTabNavigator(
  {
    SearchTab: { screen: SearchTab },
    FavoritesTab: { screen: FavoritesTab }
  },
  {
    tabBarComponent: props => {
      console.log(props);
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigation.state.index == 0}
              onPress={() => props.navigation.navigate("SearchTab")}
            >
              <Icon name="beer" />
              <Text>Search</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index == 1}
              onPress={() => props.navigation.navigate("FavoritesTab")}
            >
              <Icon name="star" />
              <Text>Favorites</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));

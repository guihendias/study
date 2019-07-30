import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header, Item, Icon, Input } from "native-base";
export default class searchHeader extends Component {
  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Enter beer name"
            returnKeyType="search"
            onChangeText={this.props.onChangeText}
            onSubmitEditing={this.props.beerSearch}
          />
        </Item>
      </Header>
    );
  }
}

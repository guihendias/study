import React, { Component } from "react";
import { Text, View, Keyboard } from "react-native";
import { Container, Content } from "native-base";
import SearchHeader from "../searchHeader";
import axios from "axios";

export default class SearchTab extends Component {
  static navigationOptions = { header: null };
  state = { searchBeer: "", beerData: {} };

  async beerSearch() {
    Keyboard.dismiss();

    const beerName = this.state.searchBeer.toLowerCase();
    console.log(beerName);
    const query = `https://sandbox-api.brewerydb.com/v2/search?q=${beerName}&type=beer&key=e310bb8d7eab1b3986e34c42d9570ed1`;

    const response = await axios.get(query);
    console.log(JSON.stringify(response));
  }

  render() {
    return (
      <Container>
        <SearchHeader
          value={this.state.searchBeer}
          onChangeText={searchBeer => this.setState({ searchBeer })}
          beerSearch={this.beerSearch.bind(this)}
        />
        <Content />
      </Container>
    );
  }
}

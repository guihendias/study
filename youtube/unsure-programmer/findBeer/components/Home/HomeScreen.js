import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "native-base";
import backgroundImage from "../../assets/background.jpg";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.homeScreenView}>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Image
            style={{ flex: 1, height: null, width: null }}
            source={backgroundImage}
          />
        </View>
        <Button
          block
          onPress={() => this.props.navigation.navigate("SearchTabNavigator")}
        >
          <Text style={{ color: "white" }}> Search Beers </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeScreenView: {
    flex: 1,
    justifyContent: "flex-end"
  }
});

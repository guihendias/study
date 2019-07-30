/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  SafeAreaView,
  Dimensions
} from "react-native";
const { height } = Dimensions.get("window");
import Card, { cardHeight, cardTitle, cardPadding } from "./Card";

const cards = [
  {
    name: "Shot",
    color: "#a9d0b6",
    price: "30 CHF"
  },
  {
    name: "Juice",
    color: "#e9bbd1",
    price: "64 CHF"
  },
  {
    name: "Mighty Juice",
    color: "#eba65c",
    price: "80 CHF"
  },
  {
    name: "Sandwich",
    color: "#95c3e4",
    price: "85 CHF"
  },
  {
    name: "Combi",
    color: "#1c1c1c",
    price: "145 CHF"
  },
  {
    name: "Signature",
    color: "#a390bc",
    price: "92 CHF"
  },
  {
    name: "Coffee",
    color: "#fef2a0",
    price: "47 CHF"
  }
];

export default class App extends Component {
  state = {
    y: new Animated.Value(0)
  };

  render() {
    const { y } = this.state;
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <View style={StyleSheet.absoluteFill}>
            {cards.map((card, i) => {
              const translateY = y.interpolate({
                inputRange: [-cardHeight, 0, cardPadding * i],
                outputRange: [
                  cardHeight * i,
                  (cardHeight - cardTitle) * -i,
                  (cardHeight - cardPadding) * -i
                ],
                extrapolateRight: "clamp"
              });

              return (
                <Animated.View
                  key={card.name}
                  style={{ transform: [{ translateY }] }}
                >
                  <Card {...card} />
                </Animated.View>
              );
            })}
          </View>
          <ScrollView
            scrollEventThrottle={16}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: { y }
                }
              }
            ])}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16
  },
  container: {
    flex: 1
  },
  content: {
    height: height * 2
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

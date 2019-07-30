import React, { Component } from "react";

import { View, FlatList, Image } from "react-native";

import PlaceholderImage from "./components/PlaceholderImage";

export default class App extends Component {
  state = {
    data: [
      {
        id: 0,
        url: "https://images.unsplash.com/photo-1467703834117-04386e3dadd8",
        loaded: false
      },
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1511971523672-53e6411f62b9",
        loaded: false
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1494522358652-f30e61a60313",
        loaded: false
      },
      {
        id: 3,
        url:
          "https://www.rd.com/wp-content/uploads/2016/04/01-cat-wants-to-tell-you-laptop.jpg",
        loaded: false
      },
      {
        id: 4,
        url:
          "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn",
        loaded: false
      }
    ]
  };

  handleLazyLoad = ({ viewableItems }) => {
    console.log(viewableItems);
    const newData = this.state.data.map(image =>
      viewableItems.find(({ item }) => item.id === image.id)
        ? { ...image, loaded: true }
        : image
    );

    this.setState({ data: newData });
  };

  renderItem = ({ item }) => (
    <View style={{ marginVertical: 20, height: 300, backgroundColor: "#EEE" }}>
      <PlaceholderImage
        source={{ uri: item.url }}
        style={{ width: "100%", height: 300 }}
      />
    </View>
  );

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id.toString()}
        onViewableItemsChanged={this.handleLazyLoad}
      />
    );
  }
}

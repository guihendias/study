import React, { useState, useRef, useEffect } from 'react';
import { Image, Dimensions, Linking, View } from 'react-native';
import SnapCarousel, { Pagination } from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageLoad from 'react-native-image-placeholder';

const { width } = Dimensions.get('window');

export default function Carousel({ data }) {
  const [page, setPage] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    carouselRef.current.startAutoplay(true);
  }, []);

  function handleClick(item) {
    Linking.canOpenURL(item.linkUrl).then(supported => {
      if (supported) {
        Linking.openURL(item.linkUrl);
      } else {
        alert('Não foi possível abrir o link');
      }
    });
  }

  function _renderItem({ item, index }) {
    return (
      <TouchableOpacity
        onPress={() => handleClick(item)}
        style={{
          shadowOpacity: 5,
          shadowColor: '#bbb',
          shadowOffset: { width: 5, height: 10 },
          shadowRadius: 5,
        }}
      >
        <ImageLoad
          source={{ uri: item.urlImagem }}
          resizeMode="cover"
          style={{ height: 160, width: '100%' }}
        />
      </TouchableOpacity>
    );
  }

  function pagination() {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={page}
        containerStyle={{
          right: -20,
          bottom: -24,
          position: 'absolute',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
        dotColor="#fff"
        inactiveDotColor="#000"
        carouselRef={carouselRef.current}
        dotStyle={{
          width: 12,
          height: 12,
          borderRadius: 6,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots
      />
    );
  }

  return (
    <View>
      <SnapCarousel
        ref={carouselRef}
        onSnapToItem={index => {
          setPage(index);
          if (index === data.length - 1) {
            setTimeout(() => {
              carouselRef.current.snapToItem(0);
              carouselRef.current.startAutoplay(true);
            }, 3000);
          }
        }}
        autoPlay={page !== data.length - 1}
        autoplayInterval={3000}
        data={data}
        contentContainerStyle={{ minHeight: 200 }}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
      />
      {pagination()}
    </View>
  );
}

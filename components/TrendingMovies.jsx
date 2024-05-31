import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import MovieCard from './MovieCard';

export default function TrendingMovies({ data }) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate('Movie', item);
  };

  return (
    <View className="mb-8 " style={{ backgroundColor: 'blue' }}>
      <Text className="text-white text-xl mx-4 mb-5 ">Trending</Text>
      <Carousel
        mode="parallax"
        width={width}
        height={height / 3}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
      />
    </View>
  );
}

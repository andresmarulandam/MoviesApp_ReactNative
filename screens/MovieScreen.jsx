import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import SafeArea from '../components/SafeArea';

var { width, height } = Dimensions.get('window');

export default function MovieScreen() {
  const { params: item } = useRoute();

  const navigation = useNavigation();
  const [cast, setCast] = useState([1, 2]);
  const [similarMovies, setSimilarMovies] = useState([1, 2]);

  let movieName = 'Spiderman';

  useEffect(() => {}, [item]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">
        <SafeArea />
        <View>
          <Image style={{ width, height: height * 0.55 }} />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Released - 2020 - 170 min
        </Text>
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Action
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Thriller
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy
          </Text>
        </View>
        <Text className="text-neutral-400 mx-4 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa
          perferendis temporibus. Porro nam voluptates placeat cupiditate, totam
          laudantium maxime consequatur fuga ratione nihil delectus architecto
          nostrum voluptatibus harum temporibus.
        </Text>
      </View>

      <Cast navigation={navigation} cast={cast} />

      <MovieList title="Similar Movies" hideSeeAll data={similarMovies} />
    </ScrollView>
  );
}

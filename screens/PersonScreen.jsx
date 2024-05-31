import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import SafeArea from '../components/SafeArea';
import MovieList from '../components/MovieList';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function PersonScreen() {
  const [personMovies, setPersonMovies] = useState([1, 2]);
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeArea />

      <View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: 'gray',
            shadowRadius: 40,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
          }}
        >
          <View className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500">
            <Image
              className="bg-gray-600"
              style={{ height: height * 0.43, width: width * 0.74 }}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            Keany Reeves
          </Text>
          <Text className="text-base text-neutral-500  text-center">
            London, United Kingdom
          </Text>
        </View>
        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 text-sm"> Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 text-sm"> 1964-09-02</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300 text-sm"> Acting</Text>
          </View>
          <View className=" px-2 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 text-sm"> 64.23</Text>
          </View>
        </View>
        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            magnam ab atque quam, reiciendis neque, accusamus eaque officiis
            natus distinctio consectetur doloremque ipsam in aspernatur unde at
            totam deserunt porro?
          </Text>
        </View>

        <MovieList title={'Movies'} hideSeeAll={true} data={personMovies} />
      </View>
    </ScrollView>
  );
}

import React, { useState } from 'react';
import { styles } from '../theme';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function SafeArea() {
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <SafeAreaView className="z-20 w-full flex-row justify-between items-center p-2 ">
      <TouchableOpacity
        style={styles.background}
        className="rounded-xl p-1"
        onPress={() => navigation.goBack()}
      >
        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
        <HeartIcon size="35" color={isFavourite ? 'red' : 'white'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

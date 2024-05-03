import React from 'react';
import { Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Bars3CenterLeftIcon } from 'react-native-heroicons/outline';

const ios = Platform.OS == 'ios';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? 'mb-2' : 'mb-3'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={50} color="white" strokeWidth={2} />
        </View>
      </SafeAreaView>
    </View>
  );
}

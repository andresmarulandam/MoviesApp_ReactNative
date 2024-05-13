import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';

const MovieCard = ({ item, handleClick }) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <TouchableWithoutFeedback onPress={() => handleClick(item)}>
        <Image
          source={require('../assets/prueba.jpeg')}
          style={{ width: '90%' }}
          className="rounded-3xl ml-5"
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MovieCard;

import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const leftArrowIcon = require('../../assets/arrow.left.png');

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.button}>
      <Image style={styles.icon} source={leftArrowIcon} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 0,
    left: 10,
  },
  icon: {
    width: 20,
    height: 25,
    objectFit: 'contain',
    tintColor: 'darkblue',
  },
});

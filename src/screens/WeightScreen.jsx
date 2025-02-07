import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ConversionScreen from './ConversionScreen';

const WeightScreen = () => {
  return (
    <SafeAreaView>
      <ConversionScreen type={'Weight'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default WeightScreen;

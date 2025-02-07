import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import ConversionScreen from './ConversionScreen';

const TempScreen = () => {
  return (
    <SafeAreaView>
      <ConversionScreen type={'Temperature'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TempScreen;

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import ConversionScreen from './ConversionScreen';

const LengthScreen = () => {
  return (
    <SafeAreaView>
      <ConversionScreen type={'Length'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LengthScreen;

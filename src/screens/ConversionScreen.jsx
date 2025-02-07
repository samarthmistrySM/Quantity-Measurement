import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PickerModal from '../components/PickerModal';
import {useNavigation} from '@react-navigation/native';
import ScreenView from '../components/ScreenView';
import KeyPad from '../components/KeyPad';

const ConversionScreen = ({type}) => {
  const getDefaultUnit = () => {
    switch (type) {
      case 'Length':
        return 'cm';
      case 'Temperature':
        return 'C';
      case 'Weight':
        return 'kg';
      default:
        return '';
    }
  };
  const [selectedValue1, setSelectedValue1] = useState(getDefaultUnit(type));
  const [selectedValue2, setSelectedValue2] = useState(getDefaultUnit(type));
  const [evelString, setEvelString] = useState('');
  const [modalVisible, setModalVisible] = useState(null);
  const [tempSelectedValue, setTempSelectedValue] = useState(null);

  const handleKeyPress = number => {
    if (evelString.length < 8) {
      setEvelString(str => str + '' + number);
    }
    if (evelString[0] === '0') {
      setEvelString(str => str.slice(1, str.length));
    }
  };

  const handleDel = () => {
    if (evelString.length === 1) {
      setEvelString('0');
    } else {
      setEvelString(str => str.slice(0, str.length - 1));
    }
  };

  const handelClear = () => {
    setEvelString('0');
  };

  const handleDone = () => {
    if (modalVisible === 1) {
      setSelectedValue1(tempSelectedValue);
    } else if (modalVisible === 2) {
      setSelectedValue2(tempSelectedValue);
    }
    setModalVisible(null);
  };

  const conversionRatesLenghts = {
    cm: {cm: 1, m: 0.01, km: 0.00001, in: 0.393701},
    m: {cm: 100, m: 1, km: 0.001, in: 39.3701},
    km: {cm: 100000, m: 1000, km: 1, in: 39370.1},
    in: {cm: 2.54, m: 0.0254, km: 0.0000254, in: 1},
  };

  const temperatureConversions = {
    C: {
      C: val => val,
      F: val => (val * 9) / 5 + 32,
    },
    F: {
      C: val => ((val - 32) * 5) / 9,
      F: val => val,
    },
  };

  const weightConversionRates = {
    kg: {kg: 1, g: 1000, mg: 1000000},
    g: {kg: 0.001, g: 1, mg: 1000},
    mg: {kg: 0.000001, g: 0.001, mg: 1},
  };

  const calculateValue = () => {
    const inputNumber = parseFloat(evelString);
    if (isNaN(inputNumber)) {
      return;
    }

    let calculatedValue;
    if (type === 'Length') {
      calculatedValue =
        inputNumber * conversionRatesLenghts[selectedValue1][selectedValue2];
    } else if (type === 'Temperature') {
      calculatedValue =
        temperatureConversions[selectedValue1][selectedValue2](inputNumber);
    } else if (type === 'Weight') {
      calculatedValue = weightConversionRates[selectedValue1][selectedValue2];
    }

    return calculatedValue.toFixed(6);
  };

  return (
    <View style={styles.container}>
      <ScreenView
        evelString={evelString}
        setTempSelectedValue={setTempSelectedValue}
        selectedValue1={selectedValue1}
        setModalVisible={setModalVisible}
        calculateValue={calculateValue}
        selectedValue2={selectedValue2}
      />
      <KeyPad
        handelClear={handelClear}
        handleDel={handleDel}
        handleKeyPress={handleKeyPress}
      />
      <PickerModal
        type={type}
        visible={modalVisible !== null}
        selectedValue={tempSelectedValue}
        onValueChange={setTempSelectedValue}
        onClose={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default ConversionScreen;

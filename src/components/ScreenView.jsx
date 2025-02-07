import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const ScreenView = ({
  evelString,
  setTempSelectedValue,
  selectedValue1,
  setModalVisible,
  calculateValue,
  selectedValue2,
}) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#3adeff', '#084e98']}
      useAngle={true}
      angle={145}
      style={styles.screen}>
      <View style={styles.screenContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.goBack}>GO BACK</Text>
        </TouchableOpacity>
        <View>
          <View
            style={[
              styles.labelContainer,
              {borderBottomColor: '#fff', borderBottomWidth: 1},
            ]}>
            <Text style={styles.labelText}>
              {evelString.length > 0 ? evelString : 0}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setTempSelectedValue(selectedValue1);
                setModalVisible(1);
              }}
              style={styles.pickerToggle}>
              <Text style={styles.pickerText}>{selectedValue1}</Text>
              <Image
                style={styles.pickerIcon}
                source={require('../assets/chevron.up.chevron.down.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>
              {evelString.length > 0 ? calculateValue() : 0}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setTempSelectedValue(selectedValue2);
                setModalVisible(2);
              }}
              style={styles.pickerToggle}>
              <Text style={styles.pickerText}>{selectedValue2}</Text>
              <Image
                style={styles.pickerIcon}
                source={require('../assets/chevron.up.chevron.down.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  goBack: {
    color: '#fff',
    fontSize: 16,
  },
  screen: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
    justifyContent: 'space-between',
  },
  labelContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  labelText: {
    fontSize: 40,
    width: '80%',
    textAlign: 'right',
    color: '#fff',
    paddingRight: 30,
  },
  pickerToggle: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '20%',
    flexDirection: 'row',
  },
  pickerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
  pickerIcon: {
    width: 15,
    height: 15,
    tintColor: '#fff',
    objectFit: 'contain',
  },
});

export default ScreenView;

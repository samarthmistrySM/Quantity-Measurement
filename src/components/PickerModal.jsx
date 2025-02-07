import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const PickerModal = ({
  visible,
  selectedValue,
  onValueChange,
  onClose,
  type,
}) => {
  const lengthUnits = [
    {label: 'Centimeter', value: 'cm'},
    {label: 'Meter', value: 'm'},
    {label: 'Kilometer', value: 'km'},
    {label: 'Inch', value: 'in'},
  ];

  const tempUnits = [
    {label: 'Celsius', value: 'C'},
    {label: 'Fahrenheit', value: 'F'},
  ];

  const weightUnits = [
    {label: 'Kilogram', value: 'kg'},
    {label: 'Gram', value: 'g'},
    {label: 'Milligram', value: 'mg'},
  ];



  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.doneButton}>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
          <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
            {type === 'Length' &&
              lengthUnits.map(unit => (
                <Picker.Item
                  key={unit.value}
                  label={unit.label}
                  value={unit.value}
                />
              ))}

            {type === 'Temperature' &&
              tempUnits.map(unit => (
                <Picker.Item
                  key={unit.value}
                  label={unit.label}
                  value={unit.value}
                />
              ))}

            {type === 'Weight' &&
              weightUnits.map(unit => (
                <Picker.Item
                  key={unit.value}
                  label={unit.label}
                  value={unit.value}
                />
              ))}
          </Picker>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  doneButton: {
    position: 'absolute',
    top: 15,
    right: 20,
    zIndex: 10,
  },
  doneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default PickerModal;

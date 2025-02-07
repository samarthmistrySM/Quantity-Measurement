import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const KeyPad = ({handelClear, handleDel, handleKeyPress}) => {
  return (
    <View style={styles.keyPad}>
      <TouchableOpacity style={styles.key} onPress={() => handelClear()}>
        <Text style={[styles.keyText, {color: '#FFA500'}]}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key}>
        <Text style={[styles.keyIcon, {objectFit: 'contain', height: 30}]}>
          <Image source={require('../assets/plus.forwardslash.minus.png')} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={handleDel}>
        <Text style={styles.keyIcon}>
          <Image source={require('../assets/delete.left.fill.png')} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(1)}>
        <Text style={styles.keyText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(2)}>
        <Text style={styles.keyText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(3)}>
        <Text style={styles.keyText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(4)}>
        <Text style={styles.keyText}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(5)}>
        <Text style={styles.keyText}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(6)}>
        <Text style={styles.keyText}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(7)}>
        <Text style={styles.keyText}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(8)}>
        <Text style={styles.keyText}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(9)}>
        <Text style={styles.keyText}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('.')}>
        <Text style={styles.keyText}>.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(0)}>
        <Text style={styles.keyText}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.key} onPress={() => handleKeyPress('00')}>
        <Text style={styles.keyText}>00</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  keyPad: {
    height: '70%',
    width: '100%',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  key: {
    width: '33%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  keyText: {
    fontSize: 35,
    fontWeight: '400',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  keyIcon: {
    width: 30,
    height: 20,
    objectFit: 'contain',
  },
});

export default KeyPad;

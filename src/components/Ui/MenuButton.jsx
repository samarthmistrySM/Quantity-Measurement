import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const MenuButton = ({title, icon, onPress}) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Image style={styles.btnIcon} source={icon} />
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);

export default MenuButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    width: '48%',
    height: 120,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  btnText: {
    fontSize: 16,
    color: '#8e8e8e',
    // color: '#019bff',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
  },
  btnIcon: {
    tintColor: '#019bff',
    // tintColor: '#8e8e8e',
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

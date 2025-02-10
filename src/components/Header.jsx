import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBody}>
        <Text style={styles.text}>Welcome! 🫡</Text>
        <Text style={styles.username}>Samarth</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '25%',
    backgroundColor: '#fff',
    width: '100%',
  },
  headerBody: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
      backgroundColor: '#019bff',
     borderBottomStartRadius: 40,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  username:{
    color: 'white',
    fontSize: 30,
    fontFamily: 'Poppins',
    fontWeight: '500',
    textAlign: 'right',
    width: '50%',
  },
});

export default Header;

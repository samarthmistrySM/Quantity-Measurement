import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container:{
      height:240,
      backgroundColor: '#019bff',
      width: '100%',
      marginTop: -62,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 40,
  },
    text:{
      color:'white',
        fontSize: 40,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    },
});

export default Header;

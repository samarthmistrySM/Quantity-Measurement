import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.bodyContainer}>
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Length')}>
            <Text style={styles.btnText}>Length</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Weight')}>
            <Text style={styles.btnText}>Weight</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={styles.btnText}
              onPress={() => navigation.navigate('Temperature')}>
              Temperature
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  bodyContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: '#019bff',
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderStartEndRadius: 40,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#019bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 40,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: -4,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
    width: 200,
  },
  btnText: {
    fontFamily: 'Poppins',
    fontSize: 25,
    color: '#fff',
    fontWeight: 300,
    textAlign: 'center',
  },
});

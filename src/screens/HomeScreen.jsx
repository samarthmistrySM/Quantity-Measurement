import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useContext } from 'react';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import MenuButton from '../components/Ui/MenuButton';
import AuthContext from '../context/AuthContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {handleLogout, loggedUser} = useContext(AuthContext);
  const buttons = [
    {
      title: 'Length',
      icon: require('../assets/ruler.fill.png'),
      screen: 'Length',
      alert: false,
    },
    {
      title: 'Weight',
      icon: require('../assets/scalemass.fill.png'),
      screen: 'Weight',
      alert: false,
    },
    {
      title: 'Temperature',
      icon: require('../assets/thermometer.variable.png'),
      screen: 'Temperature',
      alert: false,
    },
    {
      title: 'Area',
      icon: require('../assets/square.dashed.png'),
      screen: 'Length',
      alert: true,
    },
    {
      title: 'Volume',
      icon: require('../assets/cube.transparent.fill.png'),
      screen: 'Weight',
      alert: true,
    },
    {
      title: 'Money',
      icon: require('../assets/banknote.fill.png'),
      screen: 'Temperature',
      alert: true,
    },
  ];

  const handleAlert = () => {
    Alert.alert('Coming Soon', 'Coming Soon');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.body}>
        <View style={styles.btnContainer}>
          {buttons.map((btn, index) => (
            <MenuButton
              key={index}
              title={btn.title}
              icon={btn.icon}
              onPress={
                btn.alert ? handleAlert : () => navigation.navigate(btn.screen)
              }
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.logOutBtn}
          onPress={() => handleLogout()}>
          <Text style={styles.logOutBtnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#019bff',
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 20,
  },
  logOutBtn: {
    backgroundColor: '#019bff',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
    width: '90%',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logOutBtnText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
});

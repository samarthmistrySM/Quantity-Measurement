import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ConversionScreen from '../screens/ConversionScreen';
import LengthScreen from '../screens/LengthScreen';
import WeightScreen from '../screens/WeightScreen';
import TempScreen from '../screens/TempScreen';

// import HomeScreen from '../screens/HomeScreen';

const RootStack = createNativeStackNavigator();

const MainStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false,
    }}>
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Signup" component={RegisterScreen} />
    </RootStack.Navigator>
  );
};

const MainNavigator = () => {
  return (
      <MainStack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Length" component={LengthScreen} />
        <MainStack.Screen name="Weight" component={WeightScreen} />
        <MainStack.Screen name="Temperature" component={TempScreen} />
      </MainStack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
};

export default Navigator;

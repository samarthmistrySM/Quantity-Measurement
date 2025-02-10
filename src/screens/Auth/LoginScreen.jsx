import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AuthContext from '../../context/AuthContext';

const LoginScreen = () => {
  const {handelLogin} = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigation = useNavigation();
  const onLoginClick = () => {
    handelLogin(email, password);
  };
  return (
    <LinearGradient
      colors={['#084e98', '#6c8ca8', '#3adeff']}
      useAngle={true}
      angle={145}
      style={styles.safeArea}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View>
            <Text style={styles.headerText}>Quantity</Text>
            <Text style={styles.headerText}>Measurement</Text>
          </View>

          <View style={styles.loginContainer}>
            <Text style={styles.subHeaderText}>Login to your Account</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#333"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#333"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity onPress={onLoginClick} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    fontWeight: '900',
    color: '#fff',
    fontFamily: 'Cormorant Garamond',
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 23,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffffaa',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Poppins',
    marginBottom: 12,
    color: 'darkblue',
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: -1, height: 4},
  },
  loginButton: {
    backgroundColor: '#019bff',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {width: -1, height: 4},
  },
  loginButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins',
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textDecorationLine: 'underline',
  },
});

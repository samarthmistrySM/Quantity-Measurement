import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.bgContainer}>
          <View style={[styles.bgCircle, styles.bgTopLeft]} />
          <View style={[styles.bgCircle, styles.bgBottomRight]} />
        </View>

        <Text style={styles.headerText}>Quantity Measurement</Text>

        <View style={styles.loginContainer}>
          <Text style={styles.subHeaderText}>Login to your Account</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#dadada"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#dadada"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.otherWaysText}> – Or sign in with – </Text>
          <View style={styles.logoContainer}>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.logo}
                source={require('../../assets/google.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.logo}
                source={require('../../assets/facebook.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.logo}
                source={require('../../assets/x.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingVertical: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 600,
    color: '#0000de',
    fontFamily: 'Cormorant Garamond',
  },
  subHeaderText: {
    fontSize: 22,
    color: 'black',
    marginBottom: 25,
    fontWeight: 600,
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
    backgroundColor: '#ffffff99',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
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
    backgroundColor: '#0000de',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: -1, height: 4},
  },
  loginButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center',
  },
  otherWaysText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  logo: {
    width: 27,
    height: 27,
    objectFit: 'contain',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    backgroundColor: '#fff',
    borderRadius: 7,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: -1, height: 4},
  },
  logoContainer: {
    flexDirection: 'row',
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
  },
  signUpText: {
    color: '#0000de',
    fontWeight: 'bold',
  },
});

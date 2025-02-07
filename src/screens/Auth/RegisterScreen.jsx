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
import BackButton from '../../components/Ui/BackButton';

const RegisterScreen = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.headerText}>Quantity Measurement</Text>

        <View style={styles.registerContainer}>
          <Text style={styles.subHeaderText}>Create your Account</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              placeholderTextColor={'#dadada'}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              placeholderTextColor={'#dadada'}
              onChangeText={setPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              secureTextEntry
              placeholderTextColor={'#dadada'}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.otherWaysText}> – Or sign up with – </Text>
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

      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:'#fff',
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
    fontWeight:600,
  },
  registerContainer: {
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
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 12,
    color: '#0000de',
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: -1, height: 4},
  },
  registerButton: {
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
  registerButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center',
  },
  otherWaysText:{
    textAlign:'center',
    marginBottom:20,
    color:'#333',
  },
  logo: {
    width: 27,
    height: 27,
    objectFit: 'contain',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 7,
    marginHorizontal: 5,
    shadowColor: '#000',
    backgroundColor:'#fff',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: -1, height: 4},
  },
  logoContainer: {
    flexDirection: 'row',
  },
});

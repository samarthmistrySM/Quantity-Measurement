import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../../components/Ui/BackButton';
import AuthContext from '../../context/AuthContext';

const RegisterScreen = () => {
  const {handelRegister} = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const navigation = useNavigation();

  const onRegisterClick = () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match!');
    }
    handelRegister(email, fullName, contactNumber, password);
  };
  return (
    <LinearGradient
      colors={['#084e98', '#6c8ca8', '#3adeff']}
      useAngle={true}
      angle={145}
      style={styles.safeArea}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <BackButton />
          <View>
            <Text style={styles.headerText}>Quantity</Text>
            <Text style={styles.headerText}>Measurement</Text>
          </View>

          <View style={styles.registerContainer}>
            <Text style={styles.subHeaderText}>Create your Account</Text>

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
                placeholder="Fullname"
                placeholderTextColor="#333"
                value={fullName}
                onChangeText={setFullName}
              />
              <TextInput
                style={styles.input}
                placeholder="Contact Number"
                placeholderTextColor="#333"
                value={contactNumber}
                onChangeText={setContactNumber}
                keyboardType={'numeric'}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#333"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#333"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>

            <TouchableOpacity
              onPress={onRegisterClick}
              style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.signUpText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative',
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
    fontSize: 31,
    color: '#fff',
    marginBottom: 23,
    fontWeight: '600',
    fontFamily: 'Poppins',
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
  registerButton: {
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
  registerButtonText: {
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

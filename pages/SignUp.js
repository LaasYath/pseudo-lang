import React, { useState } from 'react';

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const MY_APP_ID = 'rnG9UXttQWyUnYM1S6DzKVEC5hcFmFm6KEDfyh93';
const MY_APP_KEY='SSPDdC5jAY9PANjczewprV92XeokmqRZb1vu0Fc7';

// Initialize Parse
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(MY_APP_ID, MY_APP_KEY);
Parse.serverURL = 'https://parseapi.back4app.com/';

export function SignUp({ navigation }) {
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateInputs = () => {
    if (!signUpUsername.trim()) {
        setErrorMessage('Username cannot be blank');
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signUpEmail)) {
        setErrorMessage( 'Invalid email format');
        return false;
    }
    if (!signUpEmail.trim()) {
        setErrorMessage("Email is required");
        return false;
      }
    if (signUpPassword !== signUpConfirmPassword) {
        setErrorMessage('Passwords do not match');
        return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) return;
  
    const Account = Parse.Object.extend('accounts');
    const account = new Account();
    account.set('account_name', signUpUsername);
    account.set('password', signUpPassword);
    account.set('email', signUpEmail);
  
    try {
      await account.save();
      setErrorMessage('');
      navigation.replace('Home');
    } catch (error) {
      console.error('Parse error:', error);
      setErrorMessage(error.message);
    }
  };
  

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.titleText}>Sign Up</Text>

      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/480px-Default_pfp.svg.png' }}
        style={{ height: deviceHeight / 15, width: deviceHeight / 15 }}
      />
    
      <View style={styles.inputContainer}>
      {errorMessage ? (
      <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text>
    ) : null}

        <TextInput
          value={signUpUsername}
          onChangeText={setSignUpUsername}
          placeholder="Username"
          style={styles.grayText}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={signUpEmail}
          onChangeText={setSignUpEmail}
          placeholder="Email"
          style={styles.grayText}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={signUpPassword}
          onChangeText={setSignUpPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.grayText}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={signUpConfirmPassword}
          onChangeText={setSignUpConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry
          style={styles.grayText}
        />
      </View>

      <TouchableHighlight onPress={handleSignUp}>
        <View style={styles.button1}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    height: (14 * deviceHeight) / 15,
    width: (16 * deviceWidth) / 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: '#a8dadc',
    height: deviceHeight / 10,
    width: (3 * deviceWidth) / 5,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    height: deviceHeight / 10,
    width: (4 * deviceWidth) / 5,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 15,
  },
  titleText: {
    color: 'white',
    fontFamily: 'fira code',
    fontWeight: 'bold',
    fontSize: deviceHeight / 13,
    marginBottom: 10,
  },
  buttonText: {
    color: '#457b9d',
    fontFamily: 'fira code',
    fontSize: deviceHeight / 24,
    textAlign: 'center',
  },
  grayText: {
    color: '#778da9',
    fontFamily: 'fira code',
    fontSize: deviceHeight / 28,
    marginLeft: 10,
    width: '100%',
  },
});

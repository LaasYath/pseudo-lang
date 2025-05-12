import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import Parse from 'parse/react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export function LogIn({ navigation }) {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (!loginUsername.trim() || !loginPassword.trim()) {
      setErrorMessage('Username and password are required.');
      return;
    }

    const query = new Parse.Query('accounts');
    query.equalTo('account_name', loginUsername);
    query.equalTo('password', loginPassword);

    try {
      const result = await query.first();
      if (result) {
        setErrorMessage('Login successful!');
        navigation.replace('Home');
      } else {
        setErrorMessage('Invalid username or password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login</Text>

      {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          value={loginUsername}
          onChangeText={setLoginUsername}
          placeholder="Username"
          style={styles.grayText}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={loginPassword}
          onChangeText={setLoginPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.grayText}
        />
      </View>

      <TouchableHighlight onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: (14 * deviceHeight) / 15,
    width: (16 * deviceWidth) / 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontFamily: 'fira code',
    fontWeight: 'bold',
    fontSize: deviceHeight / 13,
    marginBottom: 20,
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
  grayText: {
    color: '#778da9',
    fontFamily: 'fira code',
    fontSize: deviceHeight / 28,
    marginLeft: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#a8dadc',
    height: deviceHeight / 10,
    width: (3 * deviceWidth) / 5,
    borderRadius: 15,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#457b9d',
    fontFamily: 'fira code',
    fontSize: deviceHeight / 24,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontFamily: 'fira code',
  }
});

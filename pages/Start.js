import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export function Start({ navigation }) {

  state= {
    accounts: [
        {
            name: 'Username1',
            pfp: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/480px-Default_pfp.svg.png'
        }
    ],

    loginUsername: 'Username',
    loginPassword: 'Password',
    signUpUsername: 'Username',
    signUpEmail: 'Email',
    signUpPassword: 'Password',
    signUpConfirmPassword: 'Confirm Password',
    authCode: 'Code'
  }

  handleLoginUsernameInput = loginUsername => {
    this.setState({ loginUsername });
  };

  handleLoginPasswordInput = loginPassword => {
      this.setState({ loginPassword });
  };

  handleSignUpUsernameInput = signUpUsername => {
      this.setState({ signUpUsername });
  };

  handleSignUpEmailInput = signUpEmail => {
      this.setState({ signUpEmail });
  };

  handleSignUpPasswordInput = signUpPassword => {
      this.setState({ signUpPassword });
  };

  handleSignUpConfirmPasswordInput = signUpConfirmPassword => {
      this.setState({ signUpConfirmPassword });
  };

  handleAuthCodePasswordInput = authCode => {
      this.setState({ authCode });
  };

  return (
    <View style={styles.container}>
        <View style={{display: this.state.startDisplay}}>
            <View style={styles.contentContainer}>
                <Text style={styles.titleText}>
                    pseudo-lang
                </Text>
                            
                <TouchableHighlight
                    onPress={() => navigation.replace('Accounts')}
                >
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                    </View>
                </TouchableHighlight>
                            
                <TouchableHighlight
                    onPress={() => navigation.replace('Sign Up')}
                >
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>
                            Sign Up
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>                    
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d3557',
    },
    contentContainer: {
        height: 14 * deviceHeight / 15,
        width: 16 * deviceWidth / 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button1: {
        backgroundColor: '#a8dadc',
        height: deviceHeight / 10,
        width: 3 * deviceWidth / 5,
        borderRadius: 15,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button2: {
        backgroundColor: '#a8dadc',
        height: deviceHeight / 10,
        width: 4 * deviceWidth / 5,
        borderRadius: 15,
        marginTop: 17,
        alignItems: 'center',
        justifyContent: 'center',
    },
    accountsContainer: {
        height: deviceHeight / 4,
        width: 4 * deviceWidth / 5,
        backgroundColor: 'white',
        borderRadius: 15
    },
    userContainer: {
        height: deviceHeight / 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inputContainer: {
        height: deviceHeight / 10,
        width: 4 * deviceWidth / 5,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 15
    },
    headerContainer: {
        height: deviceHeight / 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titleText: {
        color: 'white',
        fontFamily: 'fira code',
        fontWeight: 'bold',
        fontSize: deviceHeight / 13,
        marginBottom: 10,
    },
    titleText2: {
        color: 'white',
        fontFamily: 'fira code',
        fontWeight: 'bold',
        fontSize: deviceHeight / 20,
        textAlign: 'center',
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
    },
    authText: {
        color: 'white',
        fontFamily: 'fira code',
        fontSize: deviceHeight / 30,
        textAlign: 'center',
        marginBottom: 10, 
    }
    
    
});

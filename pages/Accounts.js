import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export function Accounts({ navigation }) {

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
        <View style={{display: this.state.accountsDisplay}}>
            <View style={styles.contentContainer}>
                <Text style={styles.titleText}>
                    Accounts
                </Text>
                                
                <View style={styles.accountsContainer}>
                    <ScrollView>
                        {this.state.accounts.map((user, i) => (
                            <TouchableHighlight
                                key={user.id || i}
                                onPress={() => navigation.replace('Home')}
                            >
                                <View style={styles.userContainer}>
                                    <Image
                                        source={{ uri: user.pfp }}
                                        style={{ height: deviceHeight / 18, width: deviceHeight / 18, marginLeft: 20, marginRight: 30 }}
                                    />
                                                
                                    <Text style={styles.grayText}>
                                        {user.name}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        ))}
                        </ScrollView>
                </View>
                                
                <TouchableHighlight
                    onPress={() => navigation.replace('Log In')}
                >
                    <View style={styles.button2}>
                        <Text style={styles.buttonText}>
                            Add Existing Account
                        </Text>
                    </View>
                </TouchableHighlight>
                                
                <TouchableHighlight
                    onPress={() => navigation.replace('Sign Up')}
                >
                    <View style={styles.button2}>
                        <Text style={styles.buttonText}>
                            Create New Account
                        </Text>
                    </View>
                </TouchableHighlight>
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

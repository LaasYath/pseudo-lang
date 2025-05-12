import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export function SignUp({ navigation }) {
state= {
        accounts: [
            {
                name: 'Username1',
                pfp: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/480px-Default_pfp.svg.png',
                email: 'email@gmail.com',
                numProjects: 2
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

  return (
    <View style={styles.container}>
        <View style={{display: this.state.signUpDisplay}}>
            <View style={styles.backButtonContainer}>
                    <TouchableHighlight
                        onPress={() => navigation.replace('Start')}
                    >
                                
                        <View style={styles.backButton}>
                            <Text style={styles.buttonText}>
                                Back
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>

            <View style={styles.contentContainer}>
                <Text style={styles.titleText}>
                    Sign Up
                </Text>
                                
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/480px-Default_pfp.svg.png' }}
                    style={{ height: deviceHeight / 15, width: deviceHeight / 15 }}
                />
                                
                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.signUpUsername}
                        onChangeText={this.handlesignUpUsernameInput}
                        style={styles.grayText}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.signUpEmail}
                        onChangeText={this.handlesignUpEmailInput}
                        style={styles.grayText}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.signUpPassword}
                        onChangeText={this.handlesignUpPasswordInput}
                        style={styles.grayText}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.signUpConfirmPassword}
                        onChangeText={this.handlesignUpConsirmPasswordInput}
                        style={styles.grayText}
                    />
                </View>
                                
                                
                <TouchableHighlight
                    onPress={() => navigation.replace('Accounts')}
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
        height: 13 * deviceHeight / 15,
        width: 16 * deviceWidth / 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButtonContainer: {
        height: 1 * deviceHeight / 15,
    },
    backButton: {
        backgroundColor: '#a8dadc',
        height: 1 * deviceHeight / 15,
        width: 2 * deviceWidth / 7,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
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
        width: 16 * deviceWidth / 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userProfileContainer: {
        height: deviceHeight / 20,
        width: 2 * deviceWidth / 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectsButton: {
        height: deviceHeight / 20,
        width: deviceWidth / 4,
        backgroundColor: '#415a77',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    codeButtonsContainer: {
        height: deviceHeight / 9,
        width: 16 * deviceWidth / 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    saveButton: {
        height: deviceHeight / 20,
        width: deviceWidth / 3,
        backgroundColor: '#a8dadc',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    runButton: {
        height: deviceHeight / 20,
        width: deviceWidth / 3,
        backgroundColor: '#e63946',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeContainer: {
        height: 6 * deviceHeight / 20,
        width: 16 * deviceWidth / 18,
        marginBottom: 10
    },
    titleBarContainer: {
        height: deviceHeight / 20,
        width: 16 * deviceWidth / 18,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    codeContainer: {
        height: 5 * deviceHeight / 20,
        width: 16 * deviceWidth / 18,
        backgroundColor: '#778da9',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    profileContainer: {
        height: 6 * deviceHeight / 10,
        width: 3 * deviceWidth / 4,
        backgroundColor: '#034774',
        justifyContent: 'space-around',
        marginTop: 25,
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
    },
    usernameText: {
        color: '#457b9d',
        fontFamily: 'fira code',
        fontWeight: 'bold',
        fontSize: deviceHeight / 35
    },
    projectsButtonText: {
        color: 'white',
        fontFamily: 'fira code',
        fontSize: deviceHeight / 37
    },
    buttonText2: {
        color: 'white',
        fontFamily: 'fira code',
        fontSize: deviceHeight / 35
    },
    titleBarText: {
        color: '#457b9d',
        fontFamily: 'fira code',
        fontSize: deviceHeight / 35,
        marginLeft: 10
    },
    profileText: {
        color: '#778da9',
        fontFamily: 'fira code',
        fontSize: deviceHeight / 20,
        marginLeft: 10,
    }
});

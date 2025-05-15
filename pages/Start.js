import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export function Start({ navigation }) {

  const [startDisplay, setStartDisplay] = useState('flex');

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

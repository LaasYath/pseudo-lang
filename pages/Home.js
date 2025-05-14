import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableHighlight, View, PanResponder } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export function Home({ navigation }) {

  gap = deviceHeight / 20;
  [shellHeight, setShellHeight] = useState(6 * deviceHeight / 20);
  minHeight = deviceHeight / 10;
  maxHeight = 7 * deviceHeight / 10 - deviceHeight / 20 - gap;
  consoleHeight = maxHeight - shellHeight + gap;

  panResponder = (initialHeight, setHeight) => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        return Math.abs(gestureState.dy) > 5;
      },
      onPanResponderMove: (e, gestureState) => {
        setHeight(Math.max(minHeight, Math.min(initialHeight + gestureState.dy, maxHeight)));
      },
    });
  };
  
  shellPanResponder = panResponder(shellHeight, setShellHeight);

  /*
  handleCloseWindowPress = (window) => {
    if (window == 'shell') {
      setShellHeight(minHeight);
    } else if (window == 'console') {
      setShellHeight(maxHeight);
    }
  };
  */



  return (
    <View style={styles.container}>
      <View style={{ display: 'flex' }}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>  

            <TouchableHighlight
              onPress={() => navigation.replace('Profile')} 
            >
              <View style={styles.userProfileContainer}>
                <Image
                  source={{ uri: this.state.accounts[0].pfp }}
                  style={{ height: deviceHeight / 20, width: deviceHeight / 20, marginRight: 10, }}
                />
                                      
                <Text style={styles.usernameText}>
                  {this.state.accounts[0].name}
                </Text>
              </View>
            </TouchableHighlight>
                              
                              
            <TouchableHighlight
              onPress={() => {
                alert('Alert Message!')
              }}
            >
                                  
              <View style={styles.projectsButton}>
                <Text style={styles.projectsButtonText}>
                  Projects
                </Text>
              </View>
            </TouchableHighlight>
          </View>
                          
          <View style={styles.codeButtonsContainer}>
            <TouchableHighlight
              onPress={() => {
                alert('Alert Message!')
              }}
            >
              <View style={styles.saveButton}>
                <Text style={styles.buttonText2}>
                  Save
                </Text>
              </View>
            </TouchableHighlight>
                              
            <TouchableHighlight
              onPress={() => {
                alert('Alert Message!')
              }}
            >
              <View style={styles.runButton}>
                <Text style={styles.buttonText2}>
                  Run
                </Text>
              </View>
            </TouchableHighlight>
          </View>
                          
          <View style={{ height: 7 * deviceHeight / 10}}>
            <View style={[styles.homeContainer, { height: shellHeight, marginBottom: gap }]} 
            {...shellPanResponder.panHandlers}>

              <View style={styles.titleBarContainer}>
                <Text style={styles.titleBarText}>Shell</Text>
                <TouchableHighlight 
                  onPress={() => {
                    alert('Alert Message!')
                  }}>
                    <View>
                      <Text style={{ color: '#ff3131', marginRight: 20 }}>
                        X
                      </Text>
                    </View>
                </TouchableHighlight>
              </View>

              <View style={styles.codeContainer}>
                <Text style={styles.paragraph}>Insert Code</Text>
              </View>
            </View>

            <View style={[styles.homeContainer, { height: consoleHeight }]}>
              <View style={styles.titleBarContainer}>
                                  
                <Text style={styles.titleBarText}>
                  Console
                </Text>
                                      
              <TouchableHighlight
                onPress={() => {
                alert('Alert Message!')
              }}
              >
                <View>
                  <Text style={{color: '#ff3131', marginRight: 20}}>
                      X
                    </Text>
                </View>
              </TouchableHighlight>
            </View>
                                  
            <View style={styles.codeContainer}>
              <Text style={styles.paragraph}>
                                      
              </Text>
            </View>
          </View>


          </View>
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
        flex: 1
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

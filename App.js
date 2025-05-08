
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { HomeScreen } from './pages/HomeScreen.js';
import { LogInScreen } from './pages/LogInScreen.js';
import { SignUpScreen } from './pages/SignUpScreen.js';

export default function App() {
  return (


      <NavigationContainer>
        {/* inital route = default page */}
        <Stack.Navigator initialRouteName='Log In'>
          <Stack.Screen name="Log In" component={LogInScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>

  )
}


/*
INSTALL:
  - at least node version 18+ (check w/ 'node -v' command (no quotes))
  - newest version of npm (package manager, used to install needed dependences/libraries of react components)
      - check w/ 'npm -v' command (no quotes), should be 11+
  - install expo ('npm install expo')
  - use 'npm expo start' to run app (scan qr code on phone)
    - doesn't really work on the web (at least for me!)

  - subpackages to install:
      - because we are using different react libs, we need to install them when we create a new project in github
      - all needed libs/dependences are listed in the packages.json file. 
      - run 'npm install' to auto download everything
      - if not, check the file imports at the top to see what packages you need.

    **NOTE** all the files in the /src/ directory came with the default project template,
    idk what they do yet but kept them cause they could be useful later? 
    I created the **pages directory** for all the important files and example page routing below!!

*/

//This is what app loads first!! This can route to different login 'pages' with the stack component
//first stack.screen is default page (so the login screen)

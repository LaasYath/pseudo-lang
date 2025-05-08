
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { Accounts } from './pages/Accounts.js';
import { Home } from './pages/Home.js';
import { LogIn } from './pages/LogIn.js';
import { SignUp } from './pages/SignUp.js';
import { Start } from './pages/Start.js';

export default function App() {
  return (


      <NavigationContainer>
        {/* inital route = default page */}
        <Stack.Navigator initialRouteName='Start'  screenOptions={{headerShown: false}}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Log In" component={LogIn} /> 
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Accounts" component={Accounts} />
          <Stack.Screen name="Home" component={Home} />
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

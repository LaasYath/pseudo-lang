import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

import { Accounts } from './pages/Accounts.js';
import { Home } from './pages/Home.js';
import { LogIn } from './pages/LogIn.js';
import { SignUp } from './pages/SignUp.js';
import { Start } from './pages/Start.js';
import { Profile } from './pages/Profile.js';

export default function App() {
  return (
      <NavigationContainer>
        {/* inital route = default page */}
        <Stack.Navigator initialRouteName='Start'  screenOptions={{headerShown: false}}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Accounts" component={Accounts} />
          <Stack.Screen name="Log In" component={LogIn} /> 
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>

  )
}

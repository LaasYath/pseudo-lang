import { Button, ScrollView, Text } from 'react-native';

export function LogInScreen({ navigation }) {
  return (

    <ScrollView>
        <Text>

            GREAT!!

        </Text>

        <ScrollView>

            {/* .navigate leaves a back button */}
            {/* replace shows new screen */}
            <Button title="Go to Sign Up" onPress={() => navigation.replace('Sign Up')} />

            

        </ScrollView>

    </ScrollView>

  );
}
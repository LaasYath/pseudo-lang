import { Button, ScrollView, Text } from 'react-native';

export function HomeScreen({ navigation }) {
  return (

    <ScrollView>
        <Text>

            SUP!! fully on a new page, have to click back button to go.

        </Text>

        <ScrollView>

            {/* .navigate leaves a back button */}
            <Button title="Go to sign up" onPress={() => navigation.replace('Sign Up')} />

        </ScrollView>

    </ScrollView>

  );
}
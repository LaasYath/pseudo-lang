import { Button, ScrollView, Text } from 'react-native';

export function SignUpScreen({ navigation }) {
  return (

    <ScrollView>
        <Text>

            Slayyyyy!!

        </Text>

        <ScrollView>
            <Text>

                You made it to the signup!!

                {/* .replace goes to a fully new screen */}
            <Button title="Go to Home Page" onPress={() => navigation.replace('Home')} />

            </Text>
        </ScrollView>

    </ScrollView>

  );
}
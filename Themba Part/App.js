// Libraries
// import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Stack
import { MyStack } from "./src/components/MyStack";
const Stack = createNativeStackNavigator();

import { Login } from "./src/screens/Login";
import { Signup } from "./src/screens/Signup";
import { EmailConfirmation } from "./src/screens/EmailConfirmation";
import { EmailPwdConfirm}  from './src/screens/EmailPwdConfirm';
import 'expo-dev-client';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyStack"
        screenOptions={{
          headerShown: false,
          // headerStyle: {backgroundColor: 'red'}
        }}
      >
        <Stack.Screen name="MyStack" component={MyStack} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Login />
    // <Signup />
    // <EmailConfirmation />
    // <EmailPwdConfirm />
  );
}

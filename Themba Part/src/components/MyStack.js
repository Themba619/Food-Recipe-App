import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

// Screens
import { Login } from "../screens/Login";
import { Onboarding } from "../screens/Onboarding";
import { Signup } from "../screens/Signup";
import { EmailConfirmation } from "../screens/EmailConfirmation";
import { PasswordRecovery } from "../screens/PasswordRecovery";
import { EmailPwdConfirm } from "../screens/EmailPwdConfirm";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "lightgrey" },
      }}
    >
      <Stack.Screen
        name="OnboardingScreen"
        component={Onboarding}
        options={{
          backgroundColor: "red",
        }}
      />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignupScreen" component={Signup} 
      />
      <Stack.Screen
        name="EmailConfirmationScreen"
        component={EmailConfirmation}
      />
      <Stack.Screen
        name="PasswordRecoveryScreen"
        component={PasswordRecovery}
      />
      <Stack.Screen name="EmailPwdConfirmScreen" component={EmailPwdConfirm} />
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

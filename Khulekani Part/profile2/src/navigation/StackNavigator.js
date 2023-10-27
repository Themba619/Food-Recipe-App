import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/profileScreen';
import PostContent from '../screens/postContent';
import PostContent2 from '../screens/postContent2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfileScreen">
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="PostContent" component={PostContent} />
        <Stack.Screen name="PostContent2" component={PostContent2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

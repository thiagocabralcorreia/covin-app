import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
			name='Home'
			component={Home}
			options={{
				title: '',
				headerTransparent: true,
				headerShown: false
			}}
		/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
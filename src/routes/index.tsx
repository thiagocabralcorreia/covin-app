import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import GlobalSituation from '../screens/GlobalSituation';
import CountrySituation from '../screens/CountrySituation';
import PreventionTips from '../screens/PreventionTips';

export type RootStackParamList = {
	Home: undefined;
	GlobalSituation: { report: object };
	CountrySituation: undefined;
	PreventionTips: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						title: '',
						headerTransparent: true,
						headerShown: false
					}}
				/>
				<Stack.Screen
					name='GlobalSituation'
					component={GlobalSituation}
					options={{
						title: '',
						headerTransparent: true,
						headerShown: false
					}}
				/>
				<Stack.Screen
					name='CountrySituation'
					component={CountrySituation}
					options={{
						title: '',
						headerTransparent: true,
						headerShown: false
					}}
				/>
				<Stack.Screen
					name='PreventionTips'
					component={PreventionTips}
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

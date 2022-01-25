import * as React from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

function App() {
	const [fontsLoaded] = useFonts({
	 	Jost_400Regular,
	 	Jost_600SemiBold
	});

	if(!fontsLoaded) {
	 	return <AppLoading />
	} else {
		return (
			<>
			<StatusBar hidden={true}/>
    		<Routes />
			</>
  		);
	}
}

export default App;

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

function Home() {
  return (
	<View style={styles.container}>
		<Text style={styles.logo}>CovIn</Text>
		<View style={styles.contentContainer}>
			<Text style={styles.title}>
				Check Coronavirus Disease (COVID-19){'\n'}
				Epidemiological Update
			</Text>
			<Text style={styles.text}>Stay informed about COVID-19 cases. An overview of hospitalizations and deaths, testing, variants of concern and exposures across World.</Text>
			<Button title='Global Level' />
			<Button title='Country Level' />
		</View>
	</View>
  );
}

export default Home;

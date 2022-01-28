import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

import { FontAwesome, FontAwesome5, Foundation } from '@expo/vector-icons';

const GlobalSituation = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Global Situation</Text>
			<View style={styles.contentContainer}>
				<Text style={styles.caseNumber}>2.234.200</Text>
				<Text style={styles.subtitle}>New Cases</Text>
				<Text style={styles.caseNumber}>361.946.221</Text>
				<Text style={styles.subtitle}>Total Cases</Text>
				<Text style={styles.deathNumber}>7.753</Text>
				<Text style={styles.subtitle}>New Deaths</Text>
				<Text style={styles.deathNumber}>5.622.819</Text>
				<Text style={styles.subtitle}>Total Deaths</Text>
			</View>
		</View>
	);
}

export default GlobalSituation;

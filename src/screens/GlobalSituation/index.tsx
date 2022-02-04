import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { MaterialIcons  } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../../routes';
import { BorderlessButton } from '../../components/BorderlessButton';

type GlobalNavigationProp = StackNavigationProp<RootStackParamList, 'GlobalSituation'>;
type GlobalRouteProp = RouteProp<{ params: { report: object } }, 'params'>

const GlobalSituation: React.FC = () => {
	const navigation = useNavigation<GlobalNavigationProp>();
	const route = useRoute<GlobalRouteProp>();
	const { report } = route.params;

	function separator(number) {
		const str = number.toString().split('.');
		str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return str.join(".");
	}

	return (
		<View style={styles.container}>
			<BorderlessButton onPress={() => navigation.navigate('Home')}>
				<MaterialIcons name='arrow-left' size={30} color='white'/>
			</BorderlessButton>
			<Text style={styles.title}>Global Situation</Text>
			<View style={styles.contentContainer}>
				<Text style={styles.caseNumber}>{separator(report.NewConfirmed)}</Text>
				<Text style={styles.subtitle}>New Cases</Text>
				<Text style={styles.caseNumber}>{separator(report.NewDeaths)}</Text>
				<Text style={styles.subtitle}>New Deaths</Text>
				<Text style={styles.deathNumber}>{separator(report.TotalConfirmed)}</Text>
				<Text style={styles.subtitle}>Total Cases</Text>
				<Text style={styles.deathNumber}>{separator(report.TotalDeaths)}</Text>
				<Text style={styles.subtitle}>Total Deaths</Text>
			</View>
		</View>
	);
}

export default GlobalSituation;

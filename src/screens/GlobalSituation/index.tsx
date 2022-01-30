import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import styles from './styles';
import { MaterialIcons  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../routes';
import { BorderlessButton } from '../../components/BorderlessButton';

type globalProp = StackNavigationProp<RootStackParamList, 'GlobalSituation'>;

const GlobalSituation: React.FC = () => {
	const navigation = useNavigation<globalProp>();
	const url = 'https://api.covid19api.com/summary';
	const [ report, setReport ] = useState({});

	const getData = async () => {
		try {
			const response = await axios.get(url);
			const data = response.data.Global;

			setReport(data)
		} catch(error) {
			alert(error.message)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	useEffect(() => {
	}, [report])

	return (
		<View style={styles.container}>
			<BorderlessButton onPress={() => navigation.navigate('Home')}>
				<MaterialIcons  name='arrow-left' size={30} color='white'/>
			</BorderlessButton>
			<Text style={styles.title}>Global Situation</Text>
			<View style={styles.contentContainer}>
				<Text style={styles.caseNumber}>{report.NewConfirmed}</Text>
				<Text style={styles.subtitle}>New Cases</Text>
				<Text style={styles.caseNumber}>{report.NewDeaths}</Text>
				<Text style={styles.subtitle}>New Deaths</Text>
				<Text style={styles.deathNumber}>{report.TotalConfirmed}</Text>
				<Text style={styles.subtitle}>Total Cases</Text>
				<Text style={styles.deathNumber}>{report.TotalDeaths}</Text>
				<Text style={styles.subtitle}>Total Deaths</Text>
			</View>
		</View>
	);
}

export default GlobalSituation;

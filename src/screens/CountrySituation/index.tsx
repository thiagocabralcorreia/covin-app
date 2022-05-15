import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { MaterialIcons  } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../../routes';
import { BorderlessButton } from '../../components/BorderlessButton';
import { Select } from '../../components/Select';

interface CountryReportSchema {
	Country?: string;
	NewConfirmed?: number;
	TotalConfirmed?: number;
	NewDeaths?: number;
	TotalDeaths?: number;
}

type CountryNavigationProp = StackNavigationProp<RootStackParamList, 'CountrySituation'>;
type CountryRouteProp = RouteProp<{ params: { report: object[] } }, 'params'>

const CountrySituation: React.FC = () => {
	const navigation = useNavigation<CountryNavigationProp>();
	const route = useRoute<CountryRouteProp>();
	const { report } = route.params;
	const [ selectedCountry, setSelectedCountry ] = useState<CountryReportSchema>(undefined);

	function separator(number: number) {
		const str = number.toString().split('.');
		str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return str.join(".");
	}

	return (
		<View style={styles.container}>
			<BorderlessButton onPress={() => navigation.navigate('Home')}>
				<MaterialIcons name='arrow-left' size={30} color='white'/>
			</BorderlessButton>
			<Text style={styles.title}>Country Situation</Text>
			<View style={styles.contentContainer}>
			<Select
				data={report}
				onSelect={(selected) => {
					setSelectedCountry(selected);
				}}
				buttonTextAfterSelection={(selected) => {
					return selected.Country
				}}
				rowTextForSelection={(option) => {
					return option.Country
				}}
			/>
				{selectedCountry !== undefined && (
					<>
						<Text style={styles.caseNumber}>
							{separator(selectedCountry.NewConfirmed)}
						</Text>
						<Text style={styles.subtitle}>New Cases</Text>
						<Text style={styles.caseNumber}>
							{separator(selectedCountry.NewDeaths)}
						</Text>
						<Text style={styles.subtitle}>New Deaths</Text>
						<Text style={styles.deathNumber}>
							{separator(selectedCountry.TotalConfirmed)}
						</Text>
						<Text style={styles.subtitle}>Total Cases</Text>
						<Text style={styles.deathNumber}>
							{separator(selectedCountry.TotalDeaths)}
						</Text>
						<Text style={styles.subtitle}>Total Deaths</Text>
					</>
				)}
			</View>
		</View>
	);
}

export default CountrySituation;

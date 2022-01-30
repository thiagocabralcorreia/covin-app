import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { MaterialIcons  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../routes';
import { BorderlessButton } from '../../components/BorderlessButton';

type countryProp = StackNavigationProp<RootStackParamList, 'CountrySituation'>;

const CountrySituation: React.FC = () => {
  const navigation = useNavigation<countryProp>();

	return (
		<View style={styles.container}>
			<BorderlessButton onPress={() => navigation.navigate('Home')}>
				<MaterialIcons  name='arrow-left' size={30} color='white'/>
			</BorderlessButton>
			<Text style={styles.title}>Country Situation</Text>
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

export default CountrySituation;

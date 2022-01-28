import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { MaterialIcons  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import {RootStackParamList} from '../../routes';
import { ArrowButton } from '../../components/ArrowButton';

type globalProp = StackNavigationProp<RootStackParamList, 'GlobalSituation'>;

const GlobalSituation: React.FC = () => {
  const navigation = useNavigation<globalProp>();

	return (
		<View style={styles.container}>
			<ArrowButton onPress={() => navigation.navigate('Home')}>
				<MaterialIcons  name='arrow-left' size={30} color='white'/>
			</ArrowButton>
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

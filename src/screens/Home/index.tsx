import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesome, FontAwesome5, Foundation } from '@expo/vector-icons';

import styles from './styles';
import {RootStackParamList} from '../../routes';
import { Button } from '../../components/Button';
import logo from '../../../assets/images/covin_logo2.png';

type homeProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
	const navigation = useNavigation<homeProp>();
	const url = 'https://api.covid19api.com/summary';
	const [ report, setReport ] = useState({});

	const getData = async () => {
		try {
			const { data } = await axios.get(url);
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

	const getGlobalData = () => {
		navigation.navigate('GlobalSituation', { report: report.Global})
	}

	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />
			<View style={styles.contentContainer}>
				<Text style={styles.title}>
					COVID-19 INFORMATION{'\n'}
					Epidemiological Update
				</Text>
				<Text style={styles.text}>
					Stay informed about Coronavirus cases around the world. Also check the situation in your country and essential prevention tips.
				</Text>
				<View style={styles.buttonContainer}>
					<Button
						title='Global Situation'
						onPress={getGlobalData}
					>
						<FontAwesome5 name='globe' size={24} color='white'/>
					</Button>
					<Button
						title='Country Situation'
						onPress={() => navigation.navigate('CountrySituation')}
					>
						<FontAwesome name='flag' size={24} color='white' />
					</Button>
					<Button
						title='Prevention Tips'
						onPress={() => navigation.navigate('PreventionTips')}
					>
						<Foundation name='info' size={30} color='white' />
					</Button>
				</View>
			</View>
		</View>
	);
}

export default Home;

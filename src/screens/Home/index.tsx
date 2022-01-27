import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import logo from '../../../assets/covin_logo2.png';
import { Button } from '../../components/Button';

import { FontAwesome, FontAwesome5, Foundation } from '@expo/vector-icons';

function Home() {
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
				<Button title='Global Level'>
					<FontAwesome5 name='globe' size={24} color='white' />
				</Button>
				<Button title='Country Level'>
					<FontAwesome name='flag' size={24} color='white' />
				</Button>
				<Button title='Prevention Tips'>
					<Foundation name='info' size={30} color='white' />
				</Button>
			</View>
		</View>
	</View>
  );
}

export default Home;

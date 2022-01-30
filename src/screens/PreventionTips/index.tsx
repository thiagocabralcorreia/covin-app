import * as React from 'react';
import { View, Text, FlatList  } from 'react-native';

import styles from './styles';
import { MaterialIcons  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Tip } from '../../components/Tip';
import { tips } from '../../data/tips';

import { RootStackParamList } from '../../routes';
import { BorderlessButton } from '../../components/BorderlessButton';

type preventionProp = StackNavigationProp<RootStackParamList, 'PreventionTips'>;

const PreventionTips: React.FC = () => {
  const navigation = useNavigation<preventionProp>();

	return (
		<View style={styles.container}>
			<BorderlessButton onPress={() => navigation.navigate('Home')}>
				<MaterialIcons  name='arrow-left' size={30} color='white'/>
			</BorderlessButton>
			<Text style={styles.title}>Prevention Tips</Text>
			<View style={styles.contentContainer}>
				<FlatList
					data={tips}
					showsVerticalScrollIndicator={false}
					numColumns={2}
					keyExtractor={tip => tip.subtitle}
					renderItem={({ item }) => {
						return (
						<Tip image={item.image} subtitle={item.subtitle} />
						)
					}}
				/>
			</View>
		</View>
	);
}

export default PreventionTips;

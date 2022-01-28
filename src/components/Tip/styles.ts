import { StyleSheet } from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '70%',
		alignItems: 'center',
		textAlign: 'center',
	},
	image: {
		alignSelf: 'center',
		width: 80,
        height: 80,
	},
	subtitle: {
		fontSize: 14,
		marginTop: 7,
		marginBottom: 30,
		paddingHorizontal: 27,
		color: colors.black,
		textAlign: 'center',
		fontFamily: 'Jost_400Regular',
	},
})

export default styles;

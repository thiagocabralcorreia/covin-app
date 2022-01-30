import { StyleSheet } from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.purple,
	},
	title: {
		fontSize: 30,
		color: colors.white,
		marginVertical: 40,
		paddingHorizontal: 27,
		textAlign: 'center',
		fontFamily: 'Jost_600SemiBold',
	},
	contentContainer: {
		flex: 1,
		width: '100%',
		paddingTop: 45,
		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	caseNumber: {
		fontSize: 40,
		marginBottom: -5,
		paddingHorizontal: 27,
		color: colors.orange,
		textAlign: 'center',
		fontFamily: 'Jost_600SemiBold',
	},
	deathNumber: {
		fontSize: 40,
		marginBottom: -5,
		paddingHorizontal: 27,
		color: colors.orange_dark,
		textAlign: 'center',
		fontFamily: 'Jost_600SemiBold',
	},
	subtitle: {
		fontSize: 16,
		marginBottom: 20,
		paddingHorizontal: 27,
		color: colors.black,
		textAlign: 'center',
		fontFamily: 'Jost_400Regular',
	},
	buttonContainer: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		marginHorizontal: 'auto',
	},
});

export default styles;

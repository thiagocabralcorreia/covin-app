import { StyleSheet } from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.purple,
	},
	logo: {
		marginVertical: 45,
		alignSelf: 'center',
		width: 130,
        height: 35,
	},
	contentContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	title: {
		fontSize: 17,
		color: colors.purple,
		marginTop: 50,
		marginBottom: 25,
		paddingHorizontal: 27,
		textAlign: 'center',
		fontFamily: 'Jost_600SemiBold',
	},
	text: {
		fontSize: 15,
		marginBottom: 30,
		paddingHorizontal: 35,
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
	date: {
		fontSize: 11,
		textAlign: 'center',
		color: colors.orange_dark,
		fontFamily: 'Jost_400Regular',
		marginBottom: 40,
	},
});

export default styles;

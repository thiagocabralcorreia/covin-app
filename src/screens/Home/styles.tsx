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
		fontSize: 28,
		marginTop: 60,
		marginBottom: 50,
		textAlign: 'center',
		color: colors.orange,
		fontFamily: 'Jost_600SemiBold',
	},
	contentContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	title: {
		fontSize: 17,
		color: colors.purple,
		marginBottom: 30,
		paddingHorizontal: 27,
		fontFamily: 'Jost_600SemiBold',
	},
	text: {
		fontSize: 15,
		marginBottom: 35,
		paddingHorizontal: 27,
		color: colors.black,
		fontFamily: 'Jost_400Regular',
	},
});

export default styles;

import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.purple,
	},
	logo: {
		marginVertical: 50,
		alignSelf: 'center',
		width: Dimensions.get('window').width * 0.35,
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
		marginTop: 45,
		marginBottom: 20,
		paddingHorizontal: 27,
		textAlign: 'center',
		fontFamily: 'Jost_600SemiBold',
	},
	text: {
		fontSize: 16,
		marginBottom: 30,
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

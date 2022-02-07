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
		flexDirection: 'row',
		paddingTop: 50,
		paddingBottom: 10,
		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
});

export default styles;

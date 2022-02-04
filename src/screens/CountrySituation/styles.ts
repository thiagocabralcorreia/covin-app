import { StyleSheet, Dimensions } from 'react-native';
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
		paddingTop: 40,
		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	selectButton: {
        backgroundColor: colors.orange,
        height: 56,
		width: Dimensions.get('window').width * 0.7,
        borderRadius: 16,
		alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
		paddingHorizontal: 20,
		marginBottom: 15,
	},
    selectText: {
        fontSize: 16,
        color: colors.white,
        fontFamily: 'Jost_600SemiBold',
		marginLeft: 16,
    },
	dropdown: {
        backgroundColor: colors.orange,
	},
    rowText: {
        fontSize: 16,
        color: colors.white,
        fontFamily: 'Jost_600SemiBold',
    },
	caseNumber: {
		fontSize: 38,
		marginBottom: -5,
		paddingHorizontal: 27,
		color: colors.orange,
		textAlign: 'center',
		fontFamily: 'Jost_600SemiBold',
	},
	deathNumber: {
		fontSize: 36,
		marginBottom: -5,
		paddingHorizontal: 27,
		color: colors.orange_dark,
		textAlign: 'center',
		fontFamily: 'Jost_600SemiBold',
	},
	subtitle: {
		fontSize: 16,
		marginBottom: 13,
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

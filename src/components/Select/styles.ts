import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
	selectButton: {
        backgroundColor: colors.orange,
        height: 56,
		width: Dimensions.get('window').width * 0.7,
        borderRadius: 16,
		alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
		paddingHorizontal: 20,
		marginBottom: 30,
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
});

export default styles;

import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
        backgroundColor: colors.orange,
        height: 56,
		width: 206,
        borderRadius: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
		paddingHorizontal: 20,
		marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        color: colors.white,
        fontFamily: 'Jost_600SemiBold',
		marginLeft: 16,
    }
})

export default styles;

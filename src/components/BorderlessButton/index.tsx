import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import styles from './styles';

interface BorderlessButtonProps extends TouchableOpacityProps {
	children: JSX.Element[] | JSX.Element;
}

export const BorderlessButton = ({ children, ...rest }: BorderlessButtonProps) => {
    return (
		<TouchableOpacity style={styles.button} {...rest}>
			{children}
		</TouchableOpacity>
    )
};



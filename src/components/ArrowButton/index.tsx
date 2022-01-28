import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import styles from './styles';

interface ArrowButtonProps extends TouchableOpacityProps {
	children: JSX.Element[] | JSX.Element;
}

export const ArrowButton = ({ children, ...rest }: ArrowButtonProps) => {
    return (
		<TouchableOpacity style={styles.button} {...rest}>
			{children}
		</TouchableOpacity>
    )
};



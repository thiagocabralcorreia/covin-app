import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import styles from './styles';

interface ButtonsProps extends TouchableOpacityProps {
    title: string;
	children: JSX.Element[] | JSX.Element;
}

export const Button = ({ title, children, ...rest }: ButtonsProps) => {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
			{children}
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
};



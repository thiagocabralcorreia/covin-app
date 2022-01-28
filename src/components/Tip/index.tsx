import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import styles from './styles';

interface tipProps {
	image: ImageSourcePropType;
	subtitle: string;
}

export const Tip =({image, subtitle }: tipProps, ) => {
    return (
        <View style={styles.container}>
			<Image source={image} style={styles.image} />
		<Text style={styles.subtitle}>{subtitle}</Text>
	</View>
    )
};



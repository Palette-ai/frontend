import React from "react";
import { StyleSheet, View, Image } from "react-native";

function LoginBG(props) {
	return (
		<View style={styles.container}>
			<View>
				<Image
					source={require("../../assets/LoginBG.png")}
					style={styles.image}
				></Image>
				<Image
					source={require("../../assets/Logo.png")}
					resizeMode="contain"
					style={styles.logo}
				></Image>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {

	},
	image: {
		resizeMode: 'cover',
	},
	logo: {
		top: 0,
		left: 0,
		width: 600,
		height: 600,
		position: "absolute",
		transform: [
			{
				rotate: "-15.00deg"
			}
		]
	},
});

export default LoginBG;

import React, { useState } from 'react'
import {
	View,
	StyleSheet,
	Image,
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native'
import LoginBox from './Login/LoginBox';

function SignIn() {

	return (
		<View>
			<TouchableWithoutFeedback
				onPress={() => Keyboard.dismiss()}
			>
				<ImageBackground
					source={require("../assets/LoginBG.png")}
					style={styles.image}
				>
					<Image
						source={require("../assets/Logo.png")}
						resizeMode="contain"
						style={styles.logo}
					></Image>
					<LoginBox />
				</ImageBackground>
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		zIndex: -1
	},
	logo: {
		top: -1,
		zIndex: 1,
		marginTop: -30,
		marginBottom: 80,
		width: 300,
		height: 300,
		transform: [
			{
				rotate: "-15.00deg"
			}
		]
	}
});

export default SignIn;
import React from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Text,
	TouchableOpacity
} from "react-native";

function LoginBox(props) {
	return (
		<View style={styles.container}>
			<View style={styles.loginBG}>
				<View style={styles.usernameInputBox}>
					<View style={styles.usernamePlaceholderStack}>
						<TextInput
							placeholder="UsernamePlaceholder"
							style={styles.usernamePlaceholder}
						></TextInput>
						<View style={styles.rect2}></View>
						<View style={styles.fieldName}>
							<View style={styles.rect3}>
								<Text style={styles.username}>Username</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.passwordInputBox}>
					<View style={styles.textInputStack}>
						<TextInput
							placeholder="PasswordPlaceholder"
							style={styles.textInput}
						></TextInput>
						<View style={styles.rect4}></View>
						<View style={styles.rect5}>
							<View style={styles.rect6}>
								<Text style={styles.password2}>Password</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.loginButton}>
					<TouchableOpacity style={styles.button}>
						<View style={styles.loginFiller}></View>
						<Text style={styles.login}>Login</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.otherLoginProviders}>
					<Text style={styles.orLoginWith}>Or Login With</Text>
					<TouchableOpacity style={styles.button2}></TouchableOpacity>
					<TouchableOpacity style={styles.button3}></TouchableOpacity>
					<TouchableOpacity style={styles.button4}></TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 350,
		justifyContent: "center"
	},
	loginBG: {
		width: 300,
		height: 350,
		backgroundColor: "rgba(255,255,255,1)",
		borderRadius: 19,
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			height: 7,
			width: 0
		},
		elevation: 21,
		shadowOpacity: 0.59,
		shadowRadius: 7,
		alignSelf: "center"
	},
	usernameInputBox: {
		width: 249,
		height: 57,
		marginTop: 23,
		alignSelf: "center"
	},
	usernamePlaceholder: {
		top: 12,
		left: 13,
		position: "absolute",
		fontFamily: "roboto-regular",
		color: "#121212",
		height: 45,
		width: 236
	},
	rect2: {
		top: 11,
		width: 249,
		height: 46,
		position: "absolute",
		borderWidth: 1,
		borderColor: "rgba(223,225,225,1)",
		borderRadius: 8,
		borderBottomWidth: 1,
		left: 0
	},
	fieldName: {
		top: 0,
		left: 18,
		width: 78,
		height: 22,
		position: "absolute"
	},
	rect3: {
		width: 66,
		height: 22,
		backgroundColor: "rgba(255,255,255,1)",
		marginLeft: 15
	},
	username: {
		fontFamily: "roboto-regular",
		color: "rgba(105,105,105,1)",
		height: 18,
		width: 66,
		textAlign: "center",
		fontSize: 12,
		marginTop: 4
	},
	usernamePlaceholderStack: {
		width: 249,
		height: 57
	},
	passwordInputBox: {
		width: 249,
		height: 57,
		marginTop: 12,
		marginLeft: 26
	},
	textInput: {
		top: 12,
		left: 13,
		position: "absolute",
		fontFamily: "roboto-regular",
		color: "#121212",
		height: 45,
		width: 236
	},
	rect4: {
		top: 11,
		width: 249,
		height: 46,
		position: "absolute",
		borderWidth: 1,
		borderColor: "rgba(223,225,225,1)",
		borderRadius: 8,
		borderBottomWidth: 1,
		left: 0
	},
	rect5: {
		top: 0,
		left: 18,
		width: 78,
		height: 22,
		position: "absolute"
	},
	rect6: {
		width: 66,
		height: 22,
		backgroundColor: "rgba(255,255,255,1)",
		marginLeft: 15
	},
	password2: {
		fontFamily: "roboto-regular",
		color: "rgba(105,105,105,1)",
		height: 18,
		width: 66,
		textAlign: "center",
		fontSize: 12,
		marginTop: 4
	},
	textInputStack: {
		width: 249,
		height: 57
	},
	loginButton: {
		width: 249,
		height: 46,
		marginTop: 15,
		marginLeft: 26
	},
	button: {
		width: 249,
		height: 46,
		backgroundColor: "rgba(65,117,5,1)",
		borderRadius: 8,
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			height: 3,
			width: -3
		},
		elevation: 12,
		shadowOpacity: 0.25,
		shadowRadius: 4
	},
	loginFiller: {
		flex: 1
	},
	login: {
		fontFamily: "roboto-regular",
		color: "rgba(255,255,255,1)",
		height: 46,
		width: 249,
		textAlign: "center",
		lineHeight: 44,
		fontSize: 18
	},
	otherLoginProviders: {
		width: 247,
		height: 72,
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 45,
		marginLeft: 27
	},
	orLoginWith: {
		top: -27,
		left: 0,
		position: "absolute",
		fontFamily: "roboto-regular",
		color: "#696969",
		height: 23,
		width: 144,
		fontSize: 14,
		textAlign: "left"
	},
	button2: {
		width: 72,
		height: 72,
		backgroundColor: "#E6E6E6",
		borderRadius: 50
	},
	button3: {
		width: 72,
		height: 72,
		backgroundColor: "#E6E6E6",
		borderRadius: 50
	},
	button4: {
		width: 72,
		height: 72,
		backgroundColor: "#E6E6E6",
		borderRadius: 50
	}
});

export default LoginBox;

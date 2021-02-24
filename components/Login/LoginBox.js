import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	Button,
	Platform
} from "react-native";
import { useMutation } from '@apollo/client'
import firebase from 'firebase/app'

import LoginButton from "./LoginButton";
import LoginInputBox from "./LoginInputBox";
import { CREATE_USER } from '../../queries/users'
import SignUpLink from "./SignUpLink";

function LoginBox() {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [isSignUp, setIsSignUp] = useState(true)

	const [createUser] = useMutation(CREATE_USER, {
		onCompleted(data) {
			console.log(data);
		},
		onError(error) {
			console.log(error);
		}
	})

	// const SignUp = (username, password, email) => {
	// 	console.log(username, password, email);
	// 	createUser({
	// 		variables: {
	// 			record: { name: username, email }
	// 		}
	// 	})
	// }

	const SignUp = async (email, password) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				console.log(userCredential);
				userCredential.user.updateProfile({ displayName: name })
				console.log(userCredential.user);
			})
			.catch((error) => {
				console.log(console.log(error.code, error.message));
			});
	}

	const signInWithFacebook = async () => {

	}

	const LogIn = async (email, password) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				console.log(userCredential.user)
			})
			.catch((error) => console.log(error.code, error.message))

	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
			keyboardVerticalOffset={65}
		>
			<View style={[styles.loginBG, { height: isSignUp ? 460 : 390 }]}>
				{isSignUp &&
					<LoginInputBox
						field={name}
						setField={setName}
						placeholder="Name"
					/>
				}
				<LoginInputBox
					field={email}
					setField={setEmail}
					placeholder="Email"
				/>
				<LoginInputBox
					field={password}
					setField={setPassword}
					placeholder="Password"
				/>

				<LoginButton
					onSubmit={isSignUp ? SignUp : LogIn}
					placeholder={isSignUp ? "Sign Up" : "Log In"}
					email={email}
					name={name}
					password={password}
				/>
				<View style={styles.otherLoginProviders}>
					<Text style={styles.orLoginWith}>Or Login With</Text>
					<TouchableOpacity style={styles.button2}>
						<Button
							onPress={signInWithFacebook}
							title="FB"
						>
						</Button>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button3}></TouchableOpacity>
					<TouchableOpacity style={styles.button4}></TouchableOpacity>
				</View>
				<SignUpLink
					linkText={isSignUp ? "Aready Have an Account?" : "Click Here To Create An Account"}
					isSignUp={isSignUp}
					setIsSignUp={setIsSignUp}
				/>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 350,
		justifyContent: "center",
		zIndex: 2
	},
	loginBG: {
		width: 300,
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
		left: 13,
		position: "absolute",
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
		left: 0,
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
		left: 13,
		position: "absolute",
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

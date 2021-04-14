import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
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
			console.log('Mongos User created: ', data.userCreateOne.recordId)
			//Can't add custom fields to firebase, so saving mongoid in photoUrl LMAO
			firebase.auth().createUserWithEmailAndPassword(email, password)
				.then((userCredential) => {
					userCredential.user.updateProfile({ displayName: name })
					userCredential.user.updateProfile({ photoURL: data.userCreateOne.recordId })
				})
				.catch((error) => {
					console.log(console.log(error.code, error.message));
				});
		},
		onError(error) {
			console.log(error);
		}
	})

	const SignUp = async (email, password) => {
		createUser({
			variables: {
				record: { name, email, liked_dishes: [] }
			}
		})
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
			<View style={[styles.loginBG, { height: isSignUp ? 510 : 430 }]}>
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
					<Text style={styles.orLoginWith}>{isSignUp ? "Or Sign Up With" : "Or Log In With"}</Text>
					<TouchableOpacity style={styles.providerButton}>
					</TouchableOpacity>
					<TouchableOpacity style={styles.providerButton}></TouchableOpacity>
					<TouchableOpacity style={styles.providerButton}></TouchableOpacity>
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
		width: 380,
		justifyContent: 'center',
		alignItems: 'center',
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
	otherLoginProviders: {
		width: 300,
		height: 72,
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 45,
		alignItems: 'center'
	},
	orLoginWith: {
		top: -30,
		left: 0,
		position: "absolute",
		color: "#696969",
		height: 25,
		width: 144,
		fontSize: 14,
		textAlign: "left"
	},
	providerButton: {
		width: 82,
		height: 82,
		backgroundColor: "#E6E6E6",
		borderRadius: 50
	}
});

export default LoginBox;

//FB ID: 479094326830883
//FB SEcret: 00edbd70599aace76e553a1351492756
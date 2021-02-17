import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, Button } from 'react-native'
import { useMutation } from '@apollo/client'

import { CREATE_USER } from '../queries/users'


function SignIn() {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [createUser] = useMutation(CREATE_USER, {
		onCompleted(data) {
			console.log(data);
		}
	})

	const onSubmit = () => {
		//e.preventDefault()
		console.log(username);
		createUser({
			variables: {
				record: { name: username, location: "Testy test test" }
			}
		})
	}

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text>Or create a new account</Text>
				<TextInput
					name='username'
					value={username}
					onChangeText={text => setUsername(text)}
					placeholder='username'
				>
				</TextInput>
				<TextInput
					name='email'
					value={email}
					onChangeText={text => setEmail(text)}
					placeholder='email'
				>
				</TextInput>
				<TextInput
					name='password'
					value={password}
					onChangeText={text => setPassword(text)}
					placeholder='password'
				>
				</TextInput>
				<TouchableOpacity>
					<Button
						onPress={() => onSubmit(username)}
						title='Create new account'
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {}
});

export default SignIn;
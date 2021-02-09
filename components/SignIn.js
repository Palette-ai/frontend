import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import {
	useMutation,
	useQueryClient,
} from "react-query"
import { request, gql } from "graphql-request"

const CREATE_USER = gql`
	mutation createUser($username: String $email: String $password: String){
		createUser(username: $username email: $email password: $password){
			username
			email
			id
		}
	}
`
const endpoint = 'http://localhost:5000/'

function SignIn() {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const queryClient = useQueryClient()
	const mutation = useMutation(() => {
		request(endpoint, CREATE_USER, { username, email, password })
	}, {
		onError: (error) => console.log(error),
		onSuccess: (data) => console.log(data)
	})

	const onSubmit = e => {
		e.preventDefault()
		mutation.mutate()
	}

	return (
		<SafeAreaView>
		<View style={styles.container}>
			<Text>Or create a new account</Text>
			<TextInput
				name='username'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder='username'
			>
			</TextInput>
			<TextInput
				name='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='email'
			>
			</TextInput>
			<TextInput
				name='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder='password'
			>
			</TextInput>
			<TouchableOpacity onClick={onSubmit}><Text>Create new account</Text></TouchableOpacity>
		</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {}
});

export default SignIn;
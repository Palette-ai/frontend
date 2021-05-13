import { Alert } from 'react-native'
const LoginError = (error, loginType) => {
	Alert.alert(
		`${error}`,
		""
		[
		{
			text: "Ok",
			onPress: () => console.log("Cancel Pressed"),
		}
		]
	);
}

export default LoginError
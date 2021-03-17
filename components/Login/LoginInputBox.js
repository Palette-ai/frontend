import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default function LoginInputBox({ field, setField, placeholder }) {

	return (
		<View style={[styles.fieldInputBox]}>
			<View style={styles.rect2}>
			{
					placeholder === 'Password' ?
						(
						<TextInput
							placeholder={placeholder}
							style={styles.fieldPlaceholder}
							onChangeText={text => setField(text)}
							value={field}
							secureTextEntry={true}
						/>)
				:
						<TextInput
						placeholder={placeholder}
						style={styles.fieldPlaceholder}
						onChangeText={text => setField(text)}
						value={field}
					/>
			}
			</View>
			<View style={styles.fieldName}>
				<View style={styles.rect3}>
					<Text style={styles.field}>{placeholder}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	fieldInputBox: {
		width: 249,
		height: 57,
		marginTop: 23,
		justifyContent: 'center',
		alignItems: 'center',
	},
	fieldPlaceholder: {
		left: 13,
		position: "absolute",
		color: "#121212",
		height: 45,
		width: 236
	},
	fieldName: {
		top: 0,
		left: -15,
		width: 78,
		height: 22,
		position: "absolute"
	},
	rect2: {
		top: 5,
		width: 330,
		height: 46,
		borderWidth: 1,
		borderColor: "rgba(223,225,225,1)",
		borderRadius: 8,
		borderBottomWidth: 1,
		left: 0,
	},
	rect3: {
		width: 66,
		height: 22,
		backgroundColor: "rgba(255,255,255,1)",
		marginLeft: 15
	},
	field: {
		color: "rgba(105,105,105,1)",
		height: 18,
		width: 66,
		textAlign: "center",
		fontSize: 12,
		marginTop: 4
	}
});
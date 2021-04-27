import React from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'

const Like = () => {
	return (
		<View style={styles.filter_container}>
			<Text style={styles.text_title}>Liked</Text>
		</View>
	)
}

const styles = StyleSheet.create({
    text_title: {
		color: '#FFFFFF',
		fontSize: 34,
		marginTop: 60,
		marginLeft: 25,
		fontWeight: '600'
	},
    filter_container: {
		backgroundColor: '#FF5349',
		width: '100%',
		height: '15%',
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	}
})

export default Like
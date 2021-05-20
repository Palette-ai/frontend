import React from 'react'
import {
	ScrollView,
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native'

const Title = ({ text }) => {
	return (
		<View style={styles.filter_container}>
			<Text style={styles.text_title}>{text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	filter_container: {
		backgroundColor: '#FF5349',
		width: '100%',
		height: '14%',
		justifyContent: 'center',
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	text_title: {
		color: '#FFFFFF',
		fontSize: 34,
		marginTop: 50,
		marginLeft: 25,
		fontWeight: '600'
	}
})

export default Title

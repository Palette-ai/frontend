import React from 'react'
import {
	ScrollView,
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid"
import { sushi, dollar_sign, hot, organic, map_sign } from '../../assets' //? Where are these components in assets? I don't see them

const Search = () => {
	return (
		<View style={styles.filter_container}>
			<Text style={styles.text_title}>Recommendations</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	filter_container: {
		backgroundColor: '#FF5349',
		width: '100%',
		height: '15%',
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	filter_icons: {
		height: '100%',
		width: '100%',
	},
	filter_scroll_container: {
		marginTop: 25,
		marginLeft: 5,
	},
	filter_item_select: {
		marginRight: 20,
		flex: 1,
		justifyContent: 'center',
		borderRadius: 50,
		width: 100,
		height: 50,
		backgroundColor: '#F7B300',
	},
	filter_item_inactive: {
		marginRight: 20,
		flex: 1,
		justifyContent: 'center',
		borderRadius: 50,
		width: 100,
		height: 50,
		backgroundColor: '#FFFFFF',
	},
	filter_icon_select: {
		marginTop: '15%',
		marginLeft: '15%',
		width: 30,
		height: 30,
		borderRadius: 100,
		backgroundColor: '#FFFFFF',
	},
	filter_icon_inactive: {
		marginTop: '15%',
		marginLeft: '15%',
		width: 30,
		height: 30,
		borderRadius: 100,
		borderWidth: 0,
		backgroundColor: '#000000',
	},
	text_title: {
		color: '#FFFFFF',
		fontSize: 34,
		marginTop: 60,
		marginLeft: 25,
		fontWeight: '600'
	},
	text_filter: {
		marginTop: 15,
		marginLeft: -10,
	}
})

export default Search

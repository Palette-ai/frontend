import React from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid"

const RestaurantCard = (props) => {

    console.log(props)
	return (
		<View style={styles.filter_container}>
			<Text style={styles.text_title}>{props.restaurant_name}</Text>
            <Row style={styles.dish_container}>
				<Text style={styles.dish_discription_container}>{props.restaurant_description}</Text>
			</Row>
		</View>
	)
}

const styles = StyleSheet.create({
	filter_container: {
		backgroundColor: '#FF5349',
        width: '100%',
        height: '18%',
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
		fontSize: 30,
		marginTop: 60,
		marginLeft: 25,
		fontWeight: '600'
	},
	text_filter: {
		marginTop: 15,
		marginLeft: -10,
    },
    dish_discription_container: {
		width: '80%',
		flexWrap: 'wrap',
        zIndex: 2,
        marginLeft: 25,
        marginTop: 10,
        color: '#FFFFFF'
	},
})

export default RestaurantCard

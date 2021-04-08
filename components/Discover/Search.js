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
			<Text style={styles.text_title}>recommendations</Text>
			<ScrollView style={styles.filter_scroll_container} showsHorizontalScrollIndicator={false} horizontal={true} s>
				<View style={styles.filter_item_select}>
					<Grid>
						<Col><View style={styles.filter_icon_select}><Image style={styles.filter_icons} source={dollar_sign} /></View></Col>
						<Col style={styles.text_filter}><Text>price</Text></Col>
					</Grid>
				</View>
				<View style={styles.filter_item_inactive}>
					<Grid>
						<Col><View style={styles.filter_icon_inactive}><Image style={styles.filter_icons} source={organic} /></View></Col>
						<Col style={styles.text_filter}><Text>organic</Text></Col>
					</Grid>
				</View>
				<View style={styles.filter_item_inactive}>
					<Grid>
						<Col><View style={styles.filter_icon_inactive}><Image style={styles.filter_icons} source={hot} /></View></Col>
						<Col style={styles.text_filter}><Text>spicy</Text></Col>
					</Grid>
				</View>
				<View style={styles.filter_item_inactive}>
					<Grid>
						<Col><View style={styles.filter_icon_inactive} /></Col>
						<Col style={styles.text_filter}><Text>rating</Text></Col>
					</Grid>
				</View>
				<View style={styles.filter_item_inactive}>
					<Grid>
						<Col><View style={styles.filter_icon_inactive} /></Col>
						<Col style={styles.text_filter}><Text>score</Text></Col>
					</Grid>
				</View>
				<View style={styles.filter_item_inactive}>
					<Grid>
						<Col><View style={styles.filter_icon_inactive} /></Col>
						<Col style={styles.text_filter}><Text>gluten</Text></Col>
					</Grid>
				</View>
				<View style={styles.filter_item_inactive}>
					<Grid>
						<Col><View style={styles.filter_icon_inactive} /></Col>
						<Col style={styles.text_filter}><Text>dairy</Text></Col>
					</Grid>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	filter_container: {
		backgroundColor: '#FF5349',
		width: '100%',
		height: '21%',
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

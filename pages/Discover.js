import React from 'react'
import { 
	ScrollView, 
	StyleSheet, 
	Image,
	Text, 
	View 
} from 'react-native'
import { useQuery, gql } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { GET_ALL_DISHES } from '../queries/dishes';
import { Col, Row, Grid } from "react-native-easy-grid";
import {sushi, dollar_sign, hot, organic, map_sign} from '../assets';

const Discover = () => {
	const { loading, error, data } = useQuery(GET_ALL_DISHES)
	if (loading) return <Text> Loading... </Text>
	if (error) return <Text>{error}</Text>
	const { dishMany: dishes } = data

	return (
			<View syle={styles.container}>
				<View style={styles.filter_container}>
					<Text style={styles.text_title}>recommendations</Text>
					<ScrollView style={styles.filter_scroll_container} showsHorizontalScrollIndicator={false} horizontal={true}s>
						<View style={styles.filter_item_select}>
						<Grid>
							<Col><View style={styles.filter_icon_select}/></Col>
							<Col style={styles.text_filer_}><Text>price</Text></Col>
						</Grid>
						</View>
						<View style={styles.filter_item_inactive}>
						<Grid>
							<Col><View style={styles.filter_icon_inactive}/></Col>
							<Col style={styles.text_filer_}><Text>rating</Text></Col>
						</Grid>
						</View>
						<View style={styles.filter_item_inactive}>
						<Grid>
							<Col><View style={styles.filter_icon_inactive}/></Col>
							<Col style={styles.text_filer_}><Text>score</Text></Col>
						</Grid>
						</View>
						<View style={styles.filter_item_inactive}>
						<Grid>
							<Col><View style={styles.filter_icon_inactive}/></Col>
							<Col style={styles.text_filer_}><Text>organic</Text></Col>
						</Grid>
						</View>
						<View style={styles.filter_item_inactive}>
						<Grid>
							<Col><View style={styles.filter_icon_inactive}/></Col>
							<Col style={styles.text_filer_}><Text>spicy</Text></Col>
						</Grid>
						</View>
						<View style={styles.filter_item_inactive}>
						<Grid>
							<Col><View style={styles.filter_icon_inactive}/></Col>
							<Col style={styles.text_filer_}><Text>gluten</Text></Col>
						</Grid>
						</View>
						<View style={styles.filter_item_inactive}>
						<Grid>
							<Col><View style={styles.filter_icon_inactive}/></Col>
							<Col style={styles.text_filer_}><Text>dairy</Text></Col>
						</Grid>
						</View>
					</ScrollView>
				</View>
				<View style={styles.item_container}>
					<View style={styles.rect2}>
						<Grid>
							<Col size={2}>
								<View style={styles.shadow_box}>
									<Image source={sushi} style={styles.food_pic}/>
								</View>
							</Col>
							<Col size={1}>
								<Text>Sushi</Text>
								<Text>Sushiya</Text>
								<Row>
									<Image source={dollar_sign}/>
									<Image source={dollar_sign}/>
									<Image source={dollar_sign}/>
								</Row>
							</Col>
							<Col size={1}>
								<Row>
								<Image source={organic}/>
								<Image source={hot}/>
								</Row>
								<Row>
								<Image source={organic}/>
								<Image source={hot}/>
								</Row>
								<Row>
									<View style={styles.score_circle}/>
								</Row>
								<Row>
								<Image source={map_sign}/>
									<Text>2.3 miles away</Text>
								</Row>
							</Col>
						</Grid>
					</View>
				</View>
				<StatusBar style="light" />
				<View style={styles.footer_container}/>
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#FDFCFC',
	},
	filter_container: {
		backgroundColor: '#FF5349',
    width: 430,
    height: 215,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	filter_scroll_container:{
		marginTop:25,
    marginLeft: 10,
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
		marginRight: 20,
		width: 35,
		height: 35,
		borderRadius: 100,
		backgroundColor: '#FFFFFF',
	},
	filter_icon_inactive: {
		marginRight: 20,
		width: 35,
		height: 35,
		borderRadius: 100,
		backgroundColor: '#000000',
	},
	text_filer: {
		marginRight: 25,
	},
	text_title: {
		color:'#FFFFFF',
		fontSize: 34,
		marginTop: 60,
    marginLeft: 25,
		fontWeight:'600'
	},
	item_container: {
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#FDFCFC',
	},
	food_pic: {
		borderBottomLeftRadius: 30,
		borderTopLeftRadius: 30,
		height:'100%',
		width: '100%'
	},
	shadow_box:{
		shadowColor: '#AFAFAF',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 4,
		shadowRadius: 1,  
	},
	score_circle:{
		borderRadius: 100,
		width: 40,
		height: 40,
		backgroundColor: '#F7B300',
	},
	rect2: {
    width: 400,
    height: 150,
    backgroundColor: "#FAF9F9",
    marginTop: 15,
  },
	footer_container:{
		flex: 1,
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#FDFCFC',
	}
});

export default Discover

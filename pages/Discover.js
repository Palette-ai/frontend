import React from 'react'
import { 
	ScrollView, 
	StyleSheet, 
	Image,
	Text, 
	View 
} from 'react-native'
import { useQuery } from '@apollo/client';
import { TouchableHighlight } from 'react-native-gesture-handler'
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
					<ScrollView showsVerticalScrollIndicator={false}>
					{data.dishMany.map(dish => (
					<TouchableHighlight
						onPress={() => navigation.navigate('Dish', { dish })}
						key={dish._id}
					>
												<View style={styles.rect2}>
							<Grid>
								<Col size={.75}>
									<View style={styles.shadow_box}>
										<Image source={sushi} style={styles.food_pic}/>
									</View>
								</Col>
								<Col>
								<Row>
									<Col>
									<Row>
										<Text style={styles.dish_name}>{dish.dish_name}</Text>
										<View style={styles.rating_circle}/>
									</Row>
										<Row><Text style={styles.res_name}>Sushiya</Text></Row>
										<Row>
											<Image source={dollar_sign}/>
											<Image source={dollar_sign}/>
											<Image source={dollar_sign}/>
										</Row>
									</Col>
									<Col size={1}>
										<Row style={styles.row_reverse}>
										<Image source={organic}/>
										<Image source={hot}/>
										</Row>
										<Row style={styles.row_reverse}>
										<Image source={organic}/>
										<Image source={hot}/>
										</Row>
										<Row style={styles.row_reverse}>
											<View style={styles.score_circle}/>
										</Row>
									</Col>
									</Row>
									<Row size={.25} style={styles.row_reverse}>
										<Text>2.3 miles away</Text>
										<Image source={map_sign}/>
									</Row>
								</Col>
							</Grid>
						</View>
					</TouchableHighlight>
				))}
					</ScrollView>
				</View>
				<StatusBar style="light" />
				<View style={styles.footer_container}/>
			</View>
	)
}

const styles = StyleSheet.create({
	row_reverse: {
		flexDirection: 'row-reverse',
	},
	dish_name:{fontSize: 24,},
	rest_name:{fontSize: 32,},
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
		height:'100%',
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
		shadowOffset: { width: -1, height: 2 },
		shadowOpacity: 4,
		shadowRadius: 1,  
	},
	score_circle:{
		borderRadius: 100,
		width: 40,
		height: 40,
		backgroundColor: '#F7B300',
	},
	rating_circle:{
		borderRadius: 100,
		width: 25,
		height: 25,
		backgroundColor: '#FF5349',
	},	
	rect2: {
    width:350,
    height: 150,
    backgroundColor: "#F3F3F3",
    marginTop: 25,
		borderRadius: 30,
  },
	footer_container:{
		flex: 1,
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#FDFCFC',
	}
});

export default Discover

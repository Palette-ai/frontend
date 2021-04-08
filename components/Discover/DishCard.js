import React, { useState } from 'react'
import {
	ScrollView,
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid"
import { sushi, dollar_sign, hot, organic, map_sign } from '../../assets'
import { Button, Icon } from '@ui-kitten/components';


const DishCard = ({ dish }) => {
	const [liked, setLiked] = useState(false)
	const HeartIcon = (props) => (
		<Icon
			width={30} height={30}
			name='heart'
			stroke={liked ? 'none' : 'red'}
			fill={liked ? 'red' : 'none'}
			scale='1'
			{...props}
		/>
	);

	return (
		<View style={styles.rect2}>
			<Grid>
				<Col size={.75}>
					<View style={styles.shadow_box}>
						<Image source={sushi} style={styles.food_pic} />
					</View>
				</Col>
				<Col>
					<Col>
						<Row>
							<Text style={styles.dish_name}>{dish.dish_name}</Text>
							<Button
								accessoryLeft={HeartIcon}
								appearance={liked ? 'filled' : 'outline'}
								size={'giant'}
								onPress={() => setLiked(!liked)}
								style={styles.likeButton}
							/>
						</Row>
						<Row><Text style={styles.res_name}>Sushiya</Text></Row>
						<Row>
							<Image source={dollar_sign} />
							<Image source={dollar_sign} />
							<Image source={dollar_sign} />
						</Row>
					</Col>
					{/* <Col size={1}>
						<Row style={styles.row_reverse}>
							<Image source={organic} />
							<Image source={hot} />
						</Row>
						<Row style={styles.row_reverse}>
							<Image source={organic} />
							<Image source={hot} />
						</Row>
						<Row style={styles.row_reverse}>
							<View style={styles.score_circle} />
						</Row>
					</Col> */}

					<Row size={.25} style={styles.row_reverse}>
						<Text>2.3 miles away</Text>
						<Image source={map_sign} />
					</Row>
				</Col>
			</Grid>
		</View>
	)
}

const styles = StyleSheet.create({
	rect2: {
		width: 350,
		height: 150,
		backgroundColor: "#F3F3F3",
		marginTop: 25,
		borderRadius: 30,
	},
	food_pic: {
		borderBottomLeftRadius: 30,
		borderTopLeftRadius: 30,
		height: '100%',
		width: '100%'
	},
	likeButton: {
		backgroundColor: "#B0B0B000",
		borderWidth: 0,
		color: 'red'
	},
	shadow_box: {
		shadowColor: '#40404040',
		shadowOffset: { width: -1, height: 2 },
		shadowOpacity: 4,
		shadowRadius: 1,
	},
	dish_name: { fontSize: 24, },
	rest_name: { fontSize: 32, },
	row_reverse: {
		flexDirection: 'row-reverse',
	},
})
export default DishCard

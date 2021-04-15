import React, { useState, useMemo, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { DISH_ADD_RATING, GET_DISH_RATINGS } from '../queries/dishes';
import { GET_USERS } from '../queries/users';
import { View, 
	StyleSheet,  
	TextInput, 
	Image,
	TouchableWithoutFeedback,
	ScrollView, 
	Keyboard,
	Text,
 } from 'react-native';
import {sushi, back_arrow} from '../assets';
import { Col, Row, Grid } from "react-native-easy-grid"
import { Icon, Button, Card, Modal } from '@ui-kitten/components';


function DishReviewRow(props) {

	const dish  = props.dish
	const userID = firebase.auth().currentUser.uid

	const [rating, setRating] = useState('')
	const [review, setReview] = useState('')
	const [dishRatings, setDishRatings] = useState(0)
	const [visible, setVisible] = React.useState(false);

	// Adding a dishRating, then refetching all dishRatings to update the cache
	const [addReview] = useMutation(DISH_ADD_RATING, {
		onCompleted: (data) => {
			console.log("Review successfully submitted", data);
			Keyboard.dismiss()
			refetch()
		},
		refetchQueries: [{ query: GET_DISH_RATINGS }]
	})

	// Queries all dishRatings and usernames
	const { loading, error, data, refetch } = useQuery(GET_DISH_RATINGS, {
		variables: {
			filter: { dish_id: dish._id, hasReviewText: true },
			sort: '_ID_DESC'
		},
		onCompleted: (data) => {
            
			console.log("Query Has Been Rerun:", data)
		}
    })
    
    //want to get user by id, want username back 

	// Memoizes dishRatings and is updated when the dishRating Query is reran
	useMemo(() => {
		if (data) setDishRatings(data.dishRatingMany)
	}, [data])
    
	//Handler for adding dishRating
	const addDishRatingHandler = () => {
		addReview({
			variables: {
				record: {
					dish_id: dish._id,
					user_id: userID,
					rating: Number(rating),
					review,
				}
			}
		})
	}

    //need a way to query for the username
	return (

			<Row>
				<Col>
                    {dishRatings !== 0 &&
                        dishRatings?.map(({ _id, dish_id, user_id, review, rating }) => (
                            <Row key={_id} style={styles.rect2}>
                                <View style={styles.reviewHolder}>
                                    <View style={styles.reviewTop}>
                                        <View style={styles.iconContainer}>
                                            <Icon
                                            style={styles.icon}
                                            fill='#8F9BB3'
                                            name='person-outline'
                                            />
                                        </View>
                                        <View flexDirection='column'>
                                            <Text style={styles.username_text}>{user_id}</Text>
                                            <Text style={styles.username_text}>{rating}</Text>
                                        </View>            
                                    </View>
                                    <View> 
                                        <Text style={styles.review_text}>{`${review}`}</Text>
                                    </View>

                                </View>
                            </Row>
                        ))
                    }
				</Col>					
			</Row>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDFCFC',
	},
	backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
	back_arrow:{
		marginTop: '10%',
		marginLeft: '5%',
	},
	shadow_box:{
		shadowColor: '#40404040',
		shadowOffset: { width: 0, height:1 },
		shadowOpacity: 3,
		shadowRadius: 4,  
    },
    item_container: {
		justifyContent: 'center',
    	alignItems: 'center',
		height:'100%',
		backgroundColor: '#FDFCFC',
	},
	food_pic: {
		marginTop: '15%',
		marginLeft: '10%',
		borderRadius:30,
		height:'100%',
		width: '80%',
		zIndex: 2,
		},
	review_container: {
		backgroundColor: '#FF5349',
		paddingTop:'10%',
    width: '100%',
    height: '70%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		zIndex: -1,
	},
	dish_name:{
		fontSize: 28,
		marginLeft: '15%'
	},
	item_container: {
		flex: 1,
	},
	review_item: {
		marginTop: '20%',
		marginLeft: '5%'
	},
	dish_container:{
		marginTop: '15%',
		width: '90%',
		flexWrap: 'wrap'
	},
	dish_discription_container:{
		width: '100%',
		flexWrap: 'wrap',
		zIndex: 2,
	},
	review_title: {fontSize: 28, color:'#fff',},
    review_text: {color:'#fff', fontSize: 14},
    username_text: {
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
	add_review_btn: {
		marginRight: '5%'
    },
    reviewHolder:{
        // backgroundColor: 'blue',
        flex: 1,
        margin: 5
    },
    rect2: {
        width: '106%',
        alignSelf: 'flex-end',
        flex: 1,
        marginTop: 5,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
      },
    reviewTop: {
        flexDirection: 'row',
        marginBottom: 5
    },
    iconContainer: {
        backgroundColor:'white',
        borderColor:'black',
        borderRadius: 50,
        marginRight: 3
    },
    icon: {
        width: 40,
        height: 40,
    }
});
export default DishReviewRow;
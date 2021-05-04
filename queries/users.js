import { gql } from '@apollo/client'

//Might need to change this a bit to accept arguments, haven't tested it yet 
export const CREATE_USER = gql`
	mutation ($record: CreateOneUserInput!) {
		userCreateOne (record: $record) {
			recordId
		}
	}
`

export const GET_USERS = gql`
	query ($filter: FilterFindManyUserInput $sort: SortFindManyUserInput) {
		userMany (filter: $filter sort: $sort) {
			_id
			user_id
			username
		}
	}
`

export const USER_LIKED_DISHES = gql`
	query ($_id: MongoID!) {
		userById (_id: $_id) {
			liked_dishes
		}
	}
`

export const USER_LIKES = gql`
	query ($_id: MongoID!) {
		userById(_id: $_id){
			_id
			likes { dish_name, average_rating, description, _id, restaurant { name } }
		}
	}
`
export const USER_LIKE_DISH = gql`
	mutation ($user_id: String! $dish_id: String!) {
		userAddLikedDish (user_id: $user_id dish_id: $dish_id) {
			liked_dishes
		}
	}
`

export const USER_UNLIKE_DISH = gql`
	mutation ($user_id: String! $dish_id: String!) {
		userRemoveLikedDish (user_id: $user_id dish_id: $dish_id) {
			liked_dishes
		}
	}
`
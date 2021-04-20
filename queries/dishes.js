import { gql } from '@apollo/client'

export const GET_ALL_DISHES = gql`
	query {
  		dishMany {
			dish_name
			description
			restaurant_id
			_id
  		}
	}
`

export const GET_SOME_DISHES = gql`
	query ($_ids: [MongoID!]!) {
  		dishByIds (_ids: $_ids) {
			dish_name
			description
			_id
			restaurant { name }
  		}
	}
`

export const DISH_ADD_RATING = gql`
	mutation ($record: CreateOneDishRatingInput!) {
		dishRatingCreateOne (record: $record) {
			record {
				dish_id
				user_id
				rating
				review
			}
		}
	}
`
export const GET_DISH_RATINGS = gql`
	query ($filter: FilterFindManyDishRatingInput $sort: SortFindManyDishRatingInput) {
		dishRatingMany (filter: $filter sort: $sort) {
			_id
			dish_id
			user { name }
			rating
			review
			createdAt
		}
	}
`

export const GET_DISHES_RESTAURANT = gql`
	query ($filter: FilterFindManyDishInput $sort: SortFindManyDishInput) {
		dishMany (filter: $filter sort: $sort) {
			_id
			dish_name
  			restaurant_id
  			average_rating
  			features
  			description
  			tags
			restaurant { name }
		}
	}
`
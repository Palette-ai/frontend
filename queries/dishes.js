import { gql } from '@apollo/client'

export const GET_ALL_DISHES = gql`
	query {
  		dishMany {
			dish_name
			description
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
			user_id
			rating
			review
			createdAt
		}
	}
`
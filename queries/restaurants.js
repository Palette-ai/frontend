import { gql } from '@apollo/client'

export const GET_ALL_RESTAURANTS = gql`
	query ($filter: FilterFindManyRestaurantInput $sort: SortFindManyRestaurantInput){
  		restaurantMany (filter: $filter sort: $sort) {
			  name
        latitude
				longitude
        phone_number
        _id
				description
  		}
	}
`


export const GET_RESTAURANT_BY_ID = gql`
	query ($_id: MongoID!) {
  		restaurantById (_id: $_id) {
		  	  _id
			  name
        	  latitude
			  longitude
        	  phone_number
			  description
  		}
	}
`

export const GET_RESTAURANTS_BY_IDS = gql`
	query ($_ids: [MongoID!]!) {
  		restaurantByIds (_ids: $_ids) {
		  	  _id
			  name
        	  latitude
			  longitude
        	  phone_number
			  description
  		}
	}
`
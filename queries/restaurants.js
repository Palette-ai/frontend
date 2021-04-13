import { gql } from '@apollo/client'

export const GET_ALL_RESTAURANTS = gql`
	query {
  		restaurantMany {
			  name
        latitude
				longitude
        phone_number
        _id
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
  		}
	}
`
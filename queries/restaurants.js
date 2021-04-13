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
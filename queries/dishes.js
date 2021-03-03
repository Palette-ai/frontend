import { gql } from '@apollo/client'

export const GET_ALL_DISHES = gql`
	query {
  		dishMany {
			dish_name _id
  		}
	}
`
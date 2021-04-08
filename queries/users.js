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
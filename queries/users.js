import { gql } from '@apollo/client'

//Might need to change this a bit to accept arguments, haven't tested it yet 
export const CREATE_USER = gql`
	mutation ($record: CreateOneUserInput!) {
		userCreateOne (record: $record) {
			recordId
		}
	}
`
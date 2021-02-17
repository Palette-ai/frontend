import { ApolloClient, InMemoryCache, from } from '@apollo/client'
import { onError } from "@apollo/client/link/error"
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

const handleError = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.map(({ message, locations, path }) => (
			console.log("GraphQL error]: Message: ", message) &&
			console.log("Location: ", locations) &&
			console.log("Path: ", path))
		);

	if (networkError) console.log(`[Network error]: ${networkError}`);
});

//! For production: 
// const httplink = createUploadLink({ uri: 'INSERT_PROD_LINK', credentials: 'include' })

//! For dev: 
const httplink = createUploadLink({ uri: 'http://localhost:5000', credentials: 'include' })

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	// const token = localStorage.getItem('UserToken');
	const token = "get token from asyncStorage" //TODO: figure out asyncStorage 

	// return the headers to the context so httpLink can read them => basically creates a header with the user token so that the backend knows who sent the request
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		}
	}
});

const links = from([
	handleError,
	authLink.concat(httplink),
]);

const client = new ApolloClient({
	link: links,
	// uri: 'http://localhost:5000',
	cache: new InMemoryCache()
});
export default client
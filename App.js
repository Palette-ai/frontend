import React, { useState, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ReactQueryProvider from './ReactQueryProvider' //Gonna rip this out and replace with Apollo soon
import { ApolloProvider } from '@apollo/client'

import client from './graphql/ApolloProvider';
import AppNavigator from './navigation/AppNavigator'
import { firebaseInit } from './services/firebase'


export default function App() {
  firebaseInit()
  return (
    <ReactQueryProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </ReactQueryProvider>
  )
}
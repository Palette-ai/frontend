import React, { useState, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloProvider } from '@apollo/client'
import { useAuthState } from 'react-firebase-hooks/auth'

import client from './graphql/ApolloProvider';
import AppNavigator from './navigation/AppNavigator'
import { firebaseInit } from './services/firebase'
import firebase from 'firebase/app'
import SignInWithGoogle from './components/SignInWithGoogle'
import SignOut from './components/SignOut'
import SignIn from './components/SignIn'
import { AuthContextProvider } from './context/AuthContext';


export default function App() {
  firebaseInit()
  const auth = firebase.auth()
  const [user] = useAuthState(auth)
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <NavigationContainer>
          {
            user ?
              <AppNavigator /> :
              <SignIn />
          }
        </NavigationContainer>
      </AuthContextProvider>
    </ApolloProvider>
  )
}
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloProvider } from '@apollo/client'
import { useAuthState } from 'react-firebase-hooks/auth'
import client from './graphql/ApolloProvider';
import AppNavigator from './navigation/AppNavigator'
import { firebaseInit } from './services/firebase'
import firebase from 'firebase/app'
import SignIn from './components/SignIn'
import { AuthContextProvider } from './context/AuthContext'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'


export default function App() {
  firebaseInit()
  const auth = firebase.auth()
  const [user] = useAuthState(auth)
  console.disableYellowBox = true;
  return (
    <ApolloProvider client={client}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <AuthContextProvider>
          <NavigationContainer>
            {
              user ?
                <AppNavigator /> :
                <SignIn />
            }
          </NavigationContainer>
        </AuthContextProvider>
      </ApplicationProvider>
    </ApolloProvider>
  )
}
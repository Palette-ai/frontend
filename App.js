import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloProvider } from '@apollo/client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseInit } from './services/firebase'
import firebase from 'firebase/app'
// import SignIn from './components/SignIn'
import { AuthContextProvider } from './context/AuthContext'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { LogBox } from 'react-native'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import SignIn from './pages/SignIn'
import AppNavigator from './navigation/AppNavigator'
import client from './graphql/ApolloProvider';

export default function App() {
  firebaseInit()
  const auth = firebase.auth()
  const [user] = useAuthState(auth)
  LogBox.ignoreAllLogs();
  return (
    <ApolloProvider client={client}>
      <IconRegistry icons={EvaIconsPack} />
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
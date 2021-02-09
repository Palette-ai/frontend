import React, { useState, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './navigation/AppNavigator'
import ReactQueryProvider from './ReactQueryProvider'
import { firebaseInit } from './services/firebase'


export default function App() {
  firebaseInit()
  return (
    <ReactQueryProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ReactQueryProvider>
  )
}
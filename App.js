import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './navigation/AppNavigator';
import ReactQueryProvider from './ReactQueryProvider'

// This is the entry point for the App
export default function App() {
  return (
    <ReactQueryProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ReactQueryProvider>
  );
}
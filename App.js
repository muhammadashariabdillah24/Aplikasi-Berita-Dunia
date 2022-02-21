/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StackNavigator } from './src/router/StackNavigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (

    <NavigationContainer>

      <StackNavigator />

    </NavigationContainer>
    
  )
}


export default App;

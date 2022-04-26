import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import AppBar from './Components/AppBar';

const App = () => {
  return (
    <NavigationContainer>
      <AppBar />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

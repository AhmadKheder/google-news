import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import AppBar from './Components/AppBar';
import Context from './Components/Context';
import useLoadData from './hooks/useLoadData';

const App = () => {
  const {data, loading, error} = useLoadData(
    'https://newsapi.org/v2/everything?q=Apple&from=2022-04-27&sortBy=popularity&apiKey=279121591f3849f4add3292ae66ced49',
  );

  return (
    <Context.Provider value={data}>
      <NavigationContainer>
        <AppBar />
      </NavigationContainer>
    </Context.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;

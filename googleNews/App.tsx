import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import AppBar from './Components/AppBar';
import Context from './Components/Context';

export type dataType = {
  status: string;
  totalResults: number;
  articles: Object[];
};
const App = () => {
  const [data, setData] = useState<dataType>({
    status: '',
    totalResults: 60,
    articles: [{}],
  });
  useEffect(() => {
    newsAPI();
  }, []);
  const newsAPI = () => {
    var url =
      'https://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2022-04-27&' +
      'sortBy=popularity&' +
      'apiKey=279121591f3849f4add3292ae66ced49';

    axios
      .get(url)
      .then(response => {
        const allnews = response.data;
        // console.log('*************');

        setData(allnews);
      })
      .catch((error: any) => {
        console.error(`Error: ${error}`);
      });
  };
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

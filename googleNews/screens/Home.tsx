import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Context from '../Components/Context';
import NewsList from '../Components/NewsList';
import {RootStackParamList} from './Types';

const Stack = createNativeStackNavigator();

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
const getAllNews = () => {
  const URL =
    'https://gnews.io/api/v4/search?q=example&token=724acfa9fa5e46bda9a4a121b139b2c9';
  return axios
    .get(URL)
    .then(response => {
      console.log(response.data);
    })
    .catch((error: any) => {
      console.error(`Error: ${error}`);
    });
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  const [allNews, setAllNews] = useState<object>();
  // const news = useContext(Context);
  return (
    <Context.Consumer>
      {Context => (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            title="Go to Favorite"
            onPress={() => {
              console.log('Home to Favorite');
              navigation.navigate('Favorite');
            }}
          />
          <NewsList />
        </View>
      )}
    </Context.Consumer>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3',
  },
});

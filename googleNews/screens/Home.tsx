import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {RootStackParamList} from './Types';

const Stack = createNativeStackNavigator();

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
const Home: React.FC<HomeProps> = ({navigation}) => (
  /* const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();*/ <View
    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button
      title="Go to Favorite"
      onPress={() => {
        console.log('Home to Favorite');
        navigation.navigate('Favorite');
      }}
    />
  </View>
);
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3',
  },
});

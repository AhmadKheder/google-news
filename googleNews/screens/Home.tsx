import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
    {/* <ion-icon name="home-outline"></ion-icon> */}
    {/*  <Icon name="home" />
    <Icon name="add" />
    <Icon ios="ios-add" android="md-add" /> */}

    {/* <Icon name="home" size={30} color="#900" /> */}

    <Image
      style={{
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: 'black',
        zIndex: 1,
      }}
      source={require('../assets/home-outline.svg')}
    />
    {/* <Icon name="add" type="ionicon" size={30} color="#887700" /> */}
    <MaterialIcons name="21mp" size={24} color="black" />
    {/* <AntDesign name="21mp" size={24} color="black" /> */}

    {/* <Icon name="home" size={30} color="#900" /> */}
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

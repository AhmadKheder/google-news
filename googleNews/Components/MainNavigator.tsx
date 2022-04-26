import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Favorite from '../screens/Favorite';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

/* const screens = {
  Home: {
    screen: Home,
  },
  Favorite: {
    screen: Favorite,
  },
  Profile: {
    screen: Profile,
  },
}; */
interface MainNavigatorProps {}
const Stack = createNativeStackNavigator();

const MainStack = createStackNavigator();
// export default createAppContainer(MainStack);

const MainNavigator: React.FC = () => {
  const {Navigator, Screen} = MainStack;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{title: 'Favorite'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

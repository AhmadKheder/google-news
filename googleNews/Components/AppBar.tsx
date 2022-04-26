import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Favorite from '../screens/Favorite';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {RootStackParamList} from '../screens/Types';
interface AppBarProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
const Tab = createBottomTabNavigator();
const screens = [Home, Favorite, Profile];
const AppBar = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.screen}
      screenOptions={{
        tabBarStyle: styles.container,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <View></View>,
        }}
      />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppBar;
const styles = StyleSheet.create({
  screen: {
    borderWidth: 1,
    borderColor: 'red',
  },
  container: {
    flex: 1,

    paddingBottom: 10,
    position: 'absolute',
    borderRadius: 50,
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    elevation: 0,
    justifyContent: 'center',
  },
});

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Favorite from '../screens/Favorite';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {RootStackParamList} from '../screens/Types';
interface AppBarProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
const Tab = createBottomTabNavigator();
/* const screens = {
  Home,
  Favorite,
  Profile,
}; */

const AppBar = () => {
  /*   const renderTabScreens = () => {
    for (const key in screens) {
      return (
        <Tab.Screen
          name={key}
          component={screens[key] as ****}
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesign
                name={key}
                size={24}
                color={focused ? '#FF3A44' : '#7F7F7F'}
              />
            ),
            title: 'Home',
            tabBarLabel: ({focused}) => (
              <Text
                style={
                  focused
                    ? styles.tabBarLabelFocused
                    : styles.tabBarLabelUnfocused
                }>
                {key}
              </Text>
            ),
          }}
        />
      );
    }
  }; */
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
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? '#FF3A44' : '#7F7F7F'}
            />
          ),
          title: 'Home',
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused
                  ? styles.tabBarLabelFocused
                  : styles.tabBarLabelUnfocused
              }>
              Home
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="favorite-outline"
              size={24}
              color={focused ? '#FF3A44' : '#7F7F7F'}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused
                  ? styles.tabBarLabelFocused
                  : styles.tabBarLabelUnfocused
              }>
              Favorite
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="profile"
              size={24}
              color={focused ? '#FF3A44' : '#7F7F7F'}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused
                  ? styles.tabBarLabelFocused
                  : styles.tabBarLabelUnfocused
              }>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBar;
const styles = StyleSheet.create({
  tabBarLabelUnfocused: {
    fontSize: 10,
    color: '#7F7F7F',
  },
  tabBarLabelFocused: {
    fontSize: 10,
    color: '#FF3A44',
  },
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

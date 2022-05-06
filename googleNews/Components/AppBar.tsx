import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BreakingNews from '../screens/BreakingNews';
import Favorite from '../screens/Favorite';
import Home from '../screens/Home';
import {RootStackParamList} from '../screens/Types';
import BottomSheet from './BottomSheet';

interface AppBarProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
const Tab = createBottomTabNavigator();

const AppBar = () => {
  const [isHomeModalVisible, setHomeModalVisible] = useState(false);
  const [isHotModalVisible, setHotModalVisible] = useState(false);
  const toggleModal = () => {
    setHomeModalVisible(!isHomeModalVisible);
  };
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
          headerTitle: 'Home',
          headerRight: () => (
            <View>
              <TouchableOpacity
                onPress={() => setHomeModalVisible(!isHomeModalVisible)}>
                <AntDesign name="filter" size={24} color="black" />
              </TouchableOpacity>
              {isHomeModalVisible && (
                <BottomSheet
                  isModalVisible={isHomeModalVisible}
                  ComponentName="Home"
                />
              )}
            </View>
          ),
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
        name="Breaking News"
        component={BreakingNews}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="profile"
              size={24}
              color={focused ? '#FF3A44' : '#7F7F7F'}
            />
          ),
          headerRight: () => (
            <View>
              <TouchableOpacity
                onPress={() => setHotModalVisible(!isHotModalVisible)}>
                <AntDesign name="filter" size={24} color="black" />
              </TouchableOpacity>
              {isHotModalVisible && (
                <BottomSheet
                  isModalVisible={isHotModalVisible}
                  ComponentName="BreakingNews"
                />
              )}
            </View>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused
                  ? styles.tabBarLabelFocused
                  : styles.tabBarLabelUnfocused
              }>
              Hot
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
    // borderColor: 'red',
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
  showModleBtnPressed: {
    backgroundColor: '#FF3A44',
    fontWeight: '500',
    height: 50,
    marginTop: 30,
    maxHeight: 60,
    borderRadius: 25,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showModleBtn: {
    backgroundColor: '#fff',
    fontWeight: '500',
    height: 50,
    marginTop: 30,
    borderRadius: 25,
    maxHeight: 60,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

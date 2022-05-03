import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {RootStackParamList} from './Types';

interface ProfileProps {
  navigation: StackNavigationProp<RootStackParamList, 'Favorite'>;
}
const Profile: React.FC<ProfileProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Home"
        onPress={() => {
          console.log('Profile to Home');
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({});
